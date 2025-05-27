import java.util.*;

public class LambdaSort {
    public static void main(String[] args) {
        List<String> list = Arrays.asList("Banana", "Apple", "Mango");
        Collections.sort(list, (s1, s2) -> s1.compareTo(s2));
        list.forEach(System.out::println);
    }
}
