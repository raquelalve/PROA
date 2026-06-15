public class TelefoneCelular {
    private string marca;
    private string modelo;
    private int armazenamentoGB;
    private double preco;
    private boolean tem5G;

    public string getMarca() { return marca; }
    public void setMarca(String marca) { this.marca = marca; }

    public String getModelo() { return modelo; }
    public void setModelo(String modelo) { this.modelo = modelo; }

    public int getArmazenamentoGB() { return armazenamentoGB; }
    public void setArmazenamentoGB(int armazenamentoGB) { this.armazenamentoGB = armazenamentoGB; }

    public double getPreco() { return preco; }
    public void setPreco(double preco) { this.preco = preco; }

    public boolean isTem5G() { return tem5G; }
    public void setTem5G(boolean tem5G) { this.tem5G = tem5G; }
}

public class Main {
    public static void main(string[] args) {
        TelefoneCelular meuCelular = new TelefoneCelular();

        meuCelular.setMarca("Samsung");
        meuCelular.setModelo("Galaxy S24");
        meuCelular.setArmazenamentoGB(256);
        meuCelular.setPreco(4500.00);
        meuCelular.setTem5G(true);

        System.out.println("Marca: " + meuCelular.getMarca());
        System.out.println("Modelo: " + meuCelular.getModelo());
        System.out.println("Armazenamento: " + meuCelular.getArmazenamentoGB() + "GB");
        System.out.println("Preço: R$" + meuCelular.getPreco());
        System.out.println("Possui 5G: " + (meuCelular.isTem5G() ? "Sim" : "Não"));
    }
}