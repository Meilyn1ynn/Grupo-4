package pe.edu.upc.apisanisidro.servicesinterfaces;
import pe.edu.upc.apisanisidro.entities.Pago;
import java.util.List;

public interface IPagoService {
    public List<Pago> list();
    public void insert(Pago p);
    public Pago listId(int id);
    public void delete(int id);
    public void update(Pago p);
}
