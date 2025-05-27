class InvalidAgeException extends Exception {
    InvalidAgeException(String msg) {
        super(msg);
    }
}

public class AgeValidator {
    public static void main(String[] args) {
        int age = 16;
        try {
            if (age < 18)
                throw new InvalidAgeException("Age must be 18 or older.");
            else
                System.out.println("Age accepted.");
        } catch (InvalidAgeException e) {
            System.out.println("Exception: " + e.getMessage());
        }
    }
}
