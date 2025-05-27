import java.sql.*;

public class TransferService {
    public static void transfer(int fromId, int toId, int amount) throws SQLException {
        Connection con = DriverManager.getConnection("jdbc:sqlite:bank.db");
        try {
            con.setAutoCommit(false);
            Statement stmt = con.createStatement();

            stmt.executeUpdate("UPDATE accounts SET balance = balance - " + amount + " WHERE id = " + fromId);
            stmt.executeUpdate("UPDATE accounts SET balance = balance + " + amount + " WHERE id = " + toId);

            con.commit();
            System.out.println("Transfer successful.");
        } catch (SQLException e) {
            con.rollback();
            System.out.println("Transfer failed. Rolled back.");
        } finally {
            con.close();
        }
    }
}
