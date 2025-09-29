package pe.edu.upc.apisanisidro.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "propiedad_fotos")
public class PropiedadFoto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idFoto;

    @Column(name = "Pf_url", length = 255, nullable = false)
    private String url;

    @ManyToOne
    @JoinColumn(name = "Pr_id", nullable = false)
    private Propiedad propiedad;

    public PropiedadFoto(int idFoto, String url, Propiedad propiedad) {
        this.idFoto = idFoto;
        this.url = url;
        this.propiedad = propiedad;
    }

    public PropiedadFoto() {

    }

    public int getIdFoto() {return idFoto;}

    public void setIdFoto(int idFoto) {
        this.idFoto = idFoto;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public Propiedad getPropiedad() {
        return propiedad;
    }

    public void setPropiedad(Propiedad propiedad) {
        this.propiedad = propiedad;
    }

}
