package pe.edu.upc.apisanisidro.dtos;

public class dtosContratoClausula {
    private int idClausula;
    private int idContrato;
    private String texto;

    public int getIdClausula() {
        return idClausula;
    }

    public void setIdClausula(int idClausula) {
        this.idClausula = idClausula;
    }

    public int getIdContrato() {
        return idContrato;
    }

    public void setIdContrato(int idContrato) {
        this.idContrato = idContrato;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }
}
