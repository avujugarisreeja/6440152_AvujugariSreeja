class Car {
    String make, model;
    int year;

    void displayDetails() {
        System.out.println(year + " " + make + " " + model);
    }
}

public class CarTest {
    public static void main(String[] args) {
        Car c1 = new Car();
        c1.make = "Toyota";
        c1.model = "Camry";
        c1.year = 2020;
        c1.displayDetails();
    }
}
