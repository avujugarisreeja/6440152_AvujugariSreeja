import java.sql.*;

public class StudentDAO {
    public static void insertStudent(String name) throws SQLException {
        Connection con = DriverManager.getConnection("jdbc:sqlite:students.db");
        PreparedStatement ps = con.prepareStatement("INSERT INTO students(name) VALUES (?)");
        ps.setString(1, name);
        ps.executeUpdate();
        con.close();
    }

    public static void updateStudent(int id, String name) throws SQLException {
        Connection con = DriverManager.getConnection("jdbc:sqlite:students.db");
        PreparedStatement ps = con.prepareStatement("UPDATE students SET name = ? WHERE id = ?");
        ps.setString(1, name);
        ps.setInt(2, id);
        ps.executeUpdate();
        con.close();
    }
}
