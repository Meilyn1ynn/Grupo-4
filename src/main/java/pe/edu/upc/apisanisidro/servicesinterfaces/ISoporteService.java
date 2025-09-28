package pe.edu.upc.apisanisidro.servicesinterfaces;
import pe.edu.upc.apisanisidro.entities.Soporte;
import java.util.List;

public interface ISoporteService {
    public List<Soporte> list();
    public void insert(Soporte s);
    public Soporte listId(int id);
    public void delete(int id);
    public void update(Soporte s);
}
