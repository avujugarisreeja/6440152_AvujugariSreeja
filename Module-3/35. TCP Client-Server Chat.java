import java.net.*;
import java.io.*;

public class ChatServer {
    public static void main(String[] args) throws IOException {
        ServerSocket server = new ServerSocket(1234);
        Socket socket = server.accept();
        BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()));
        BufferedWriter out = new BufferedWriter(new OutputStreamWriter(socket.getOutputStream()));

        out.write("Welcome!\n");
        out.flush();

        String msg;
        while ((msg = in.readLine()) != null) {
            System.out.println("Client: " + msg);
        }

        socket.close();
        server.close();
    }
}
