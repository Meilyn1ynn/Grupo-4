package pe.edu.upc.apisanisidro.servicesinterfaces;
import pe.edu.upc.apisanisidro.entities.Notificacion;
import java.util.List;

public interface INotificacionService {
    public List<Notificacion> list();
    public void insert(Notificacion n);
    public Notificacion listId(int id);
    public void delete(int id);
    public void update(Notificacion n);
}
