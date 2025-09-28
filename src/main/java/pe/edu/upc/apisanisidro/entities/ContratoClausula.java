package pe.edu.upc.apisanisidro.entities;

import jakarta.persistence.*;

@Table
@Entity(name = "ContratoClausula")
public class ContratoClausula {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idClausula;

    @ManyToOne
    @JoinColumn(name = "Con_id", nullable = false)
    private Contrato contrato;

    @Column(name = "Cc_texto", columnDefinition = "TEXT", nullable = false)
    private String texto;

    public ContratoClausula(int idClausula, Contrato contrato, String texto) {
        this.idClausula = idClausula;
        this.contrato = contrato;
        this.texto = texto;
    }

    public ContratoClausula() {

    }

    public int getIdClausula() {
        return idClausula;
    }

    public void setIdClausula(int idClausula) {
        this.idClausula = idClausula;
    }

    public Contrato getContrato() {
        return contrato;
    }

    public void setContrato(Contrato contrato) {
        this.contrato = contrato;
    }

    public String getTexto() {
        return texto;
    }

    public void setTexto(String texto) {
        this.texto = texto;
    }
}
