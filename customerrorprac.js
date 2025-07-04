class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateName (name) {
    if (name.length < 3) {
        throw new ValidationError("Name must be at least three characters long");
    }
    console.log(name);
}

validateName("Sid");