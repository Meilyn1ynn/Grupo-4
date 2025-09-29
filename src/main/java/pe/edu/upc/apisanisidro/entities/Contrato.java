package pe.edu.upc.apisanisidro.entities;
import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "contratos")
public class Contrato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idContrato;

    @Column(name = "Con_fecha_inicio", nullable = false)
    private LocalDate fechaInicio;

    @Column(name = "Con_fecha_fin", nullable = false)
    private LocalDate fechaFin;

    @Column(name = "Con_pdf", length = 255)
    private String pdf;

    @Column(name = "Con_estado", length = 50)
    private String estado;

    @ManyToOne
    @JoinColumn(name = "Us_inquilino_id", nullable = false)
    private Usuarios inquilino;

    @ManyToOne
    @JoinColumn(name = "Us_propietario_id", nullable = false)
    private Usuarios propietario;

    @ManyToOne
    @JoinColumn(name = "Pr_id", nullable = false)
    private Propiedad propiedad;

    public Contrato(int idContrato, LocalDate fechaInicio, LocalDate fechaFin, String pdf, String estado, Usuarios inquilino, Usuarios propietario, Propiedad propiedad) {
        this.idContrato = idContrato;
        this.fechaInicio = fechaInicio;
        this.fechaFin = fechaFin;
        this.pdf = pdf;
        this.estado = estado;
        this.inquilino = inquilino;
        this.propietario = propietario;
        this.propiedad = propiedad;
    }

    public Contrato() {

    }

    public int getIdContrato() {return idContrato;}

    public void setIdContrato(int idContrato) {
        this.idContrato = idContrato;
    }

    public LocalDate getFechaInicio() {
        return fechaInicio;
    }

    public void setFechaInicio(LocalDate fechaInicio) {
        this.fechaInicio = fechaInicio;
    }

    public LocalDate getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(LocalDate fechaFin) {
        this.fechaFin = fechaFin;
    }

    public String getPdf() {
        return pdf;
    }

    public void setPdf(String pdf) {
        this.pdf = pdf;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public Usuarios getInquilino() {
        return inquilino;
    }

    public void setInquilino(Usuarios inquilino) {
        this.inquilino = inquilino;
    }

    public Usuarios getPropietario() {
        return propietario;
    }

    public void setPropietario(Usuarios propietario) {
        this.propietario = propietario;
    }

    public Propiedad getPropiedad() {
        return propiedad;
    }

    public void setPropiedad(Propiedad propiedad) {
        this.propiedad = propiedad;
    }
}
