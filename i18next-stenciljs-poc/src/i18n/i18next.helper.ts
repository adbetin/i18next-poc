export class ComponentLocalizable {
  localize = LocalizableService.getInstance();

  constructor() {
    console.log("This is the constructor");
  }
}

class LocalizableService {
  private static instance: LocalizableService;

  /**
   * The Singleton's constructor should always be private to prevent direct
   * construction calls with the `new` operator.
   */
  private constructor() { }

  /**
   * The static method that controls the access to the singleton instance.
   *
   * This implementation let you subclass the Singleton class while keeping
   * just one instance of each subclass around.
   */
  public static getInstance(): LocalizableService {
    if (!LocalizableService.instance) {
      LocalizableService.instance = new LocalizableService();
    }
    return LocalizableService.instance;
  }

  /**
   * Finally, any singleton should define some business logic, which can be
   * executed on its instance.
   */
  public someBusinessLogic() {
    // ...
  }
}
