import java.util.Scanner;
import java.util.Random;

public class NumberGuessing {
    public static void main(String[] args) {
        Random rand = new Random();
        int number = rand.nextInt(100) + 1;
        Scanner sc = new Scanner(System.in);
        int guess;

        do {
            System.out.print("Guess the number (1-100): ");
            guess = sc.nextInt();

            if (guess < number)
                System.out.println("Too low!");
            else if (guess > number)
                System.out.println("Too high!");
            else
                System.out.println("Correct!");
        } while (guess != number);
    }
}
