public class FestaAniversario {
    private String nomeAniversariante;
    private int idade;
    private String local;
    private int quantidadeConvidados;
    private boolean possuiBuffet;

    public String getNomeAniversariante() { return nomeAniversariante; }
    public void setNomeAniversariante(String nome) { this.nomeAniversariante = nome; }

    public int getIdade() { return idade; }
    public void setIdade(int idade) { this.idade = idade; }

    public String getLocal() { return local; }
    public void setLocal(String local) { this.local = local; }

    public int getQuantidadeConvidados() { return quantidadeConvidados; }
    public void setQuantidadeConvidados(int qtd) { this.quantidadeConvidados = qtd; }

    public boolean isPossuiBuffet() { return possuiBuffet; }
    public void setPossuiBuffet(boolean possui) { this.possuiBuffet = possui; }
}

public class Main {
    public static void main(String[] args) {
        FestaAniversario festinha = new FestaAniversario();

        festinha.setNomeAniversariante("Maria");
        festinha.setIdade(25);
        festinha.setLocal("Salão de Festas");
        festinha.setQuantidadeConvidados(50);
        festinha.setPossuiBuffet(true);

        System.out.println("Aniversariante: " + festinha.getNomeAniversariante());
        System.out.println("Idade: " + festinha.getIdade());
    }
}