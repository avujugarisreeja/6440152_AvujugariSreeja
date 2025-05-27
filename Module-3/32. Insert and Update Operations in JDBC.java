import java.sql.*;

public class JDBCConnection {
    public static void main(String[] args) {
        try {
            Connection con = DriverManager.getConnection("jdbc:sqlite:students.db");
            Statement stmt = con.createStatement();
            ResultSet rs = stmt.executeQuery("SELECT * FROM students");
            while (rs.next()) {
                System.out.println(rs.getString("name"));
            }
            con.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
