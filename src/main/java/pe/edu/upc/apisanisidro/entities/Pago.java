package pe.edu.upc.apisanisidro.entities;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
@Table(name = "pagos")
public class Pago {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Pa_id")
    private int idPago;

    @ManyToOne
    @JoinColumn(name = "Con_id", nullable = false)
    private Contrato contrato;

    @Column(name = "Pa_monto", nullable = false)
    private double monto;

    @Column(name = "Pa_fecha", nullable = false)
    private LocalDate fecha;

    @Column(name = "Pa_metodo", length = 50, nullable = false)
    private String metodo;

    @Column(name = "Pa_estado", length = 50)
    private String estado;

    public Pago(int idPago, Contrato contrato, double monto, LocalDate fecha, String metodo, String estado) {
        this.idPago = idPago;
        this.contrato = contrato;
        this.monto = monto;
        this.fecha = fecha;
        this.metodo = metodo;
        this.estado = estado;
    }

    public Pago() {

    }

    public int getIdPago() {return idPago;}

    public void setIdPago(int idPago) {
        this.idPago = idPago;
    }

    public Contrato getContrato() {
        return contrato;
    }

    public void setContrato(Contrato contrato) {
        this.contrato = contrato;
    }

    public double getMonto() {
        return monto;
    }

    public void setMonto(double monto) {
        this.monto = monto;
    }

    public LocalDate getFecha() {
        return fecha;
    }

    public void setFecha(LocalDate fecha) {
        this.fecha = fecha;
    }

    public String getMetodo() {
        return metodo;
    }

    public void setMetodo(String metodo) {
        this.metodo = metodo;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }
}
