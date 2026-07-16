# Angular Services

## What is a Service?

A service is a class that contains business logic or shared functionality that can be reused across components.

Instead of putting all your code inside components, you move logic into services.

**Think of it like this:**

* Components = display the UI
* Services = do the work

Examples:

* Calling an API
* Managing authentication
* Storing application state
* Utility functions
* Logging
* Feature-specific business logic

---

# Why Use Services?

Without services:

* Components become huge
* Logic gets duplicated
* Difficult to test
* Difficult to maintain

With services:

✅ Separation of concerns

✅ Reusable code

✅ Easier unit testing

✅ Cleaner components

---

# A Simple Example

Instead of this:

```typescript
@Component({...})
export class ProductsComponent {

  products = [];
  private http = inject(HttpClient);

  ngOnInit() {
    this.http.get<Product[]>('/api/products')
      .subscribe(products => {
        this.products = products;
      });
  }

}
```

Move the API logic into a service.

```typescript
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private http = inject(HttpClient);

  getProducts() {
    return this.http.get<Product[]>('/api/products');
  }

}
```

Now the component becomes:

```typescript
@Component({...})
export class ProductsComponent {

  products = [];
  private productService = inject(ProductService);

  ngOnInit() {
    this.productService
      .getProducts()
      .subscribe(products => this.products = products);
  }

}
```

---

# Dependency Injection (DI)

Angular services work because of **Dependency Injection**.

Instead of creating services yourself:

```typescript
const service = new ProductService();
```

Angular creates and manages them.

You simply ask for them:

```typescript
private productService = inject(ProductService);
```

Angular provides the instance automatically.

Benefits:

* Loose coupling
* Easier testing
* Easy to replace implementations
* Lifecycle managed by Angular

---

# Service Lifetime

The lifetime depends on where it's provided.

### Root

```typescript
@Injectable({
  providedIn: 'root'
})
```

One instance for the entire application.

This is the most common option.

---

### Component

```typescript
@Component({
  providers: [ProductService]
})
```

Each component gets its own instance.

Useful when each component needs isolated state.

---

### Feature Providers

Services can also be provided at a feature or route level.

This allows each lazy-loaded feature to have its own service instance.

---

# Services Can Hold State

Services don't only call APIs.

Example:

```typescript
@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: Product[] = [];

  add(product: Product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

}
```

Every component using this service sees the same cart because it's a singleton.

---

# Common Types of Services

**API Services**

* ProductService
* UserService
* OrdersService

---

**State Services**

* ShoppingCartService
* ThemeService
* UserPreferencesService

---

**Authentication**

* Login
* Logout
* JWT management
* Permissions

---

**Utility Services**

* Date formatting
* Currency conversion
* Logging
* Notifications

---

# Best Practices

✔ Keep components focused on presentation

✔ Keep business logic in services

✔ Make services do one thing well

✔ Return Observables or Signals instead of subscribing inside the service (unless the service owns the side effect)

✔ Avoid "God Services" that know everything

---

# Testing

Services are much easier to test than components.

```typescript
describe('ProductService', () => {

  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

});
```

Because logic is separated, tests become smaller and faster.

---

# Key Takeaways

* Services keep components clean.
* They promote code reuse.
* Angular creates them using Dependency Injection.
* Most services are singletons (`providedIn: 'root'`).
* Services are ideal for business logic, API calls, state management, and shared functionality.

---

## Closing Thought

> **A good rule of thumb:** If your component starts doing more than displaying data and handling user interactions, ask yourself whether that logic belongs in a service instead.