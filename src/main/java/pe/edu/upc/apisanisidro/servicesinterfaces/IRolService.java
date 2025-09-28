package pe.edu.upc.apisanisidro.servicesinterfaces;
import pe.edu.upc.apisanisidro.entities.Roles;
import java.util.List;

public interface IRolService {
    public List<Roles> list();
    public void insert(Roles r);
    public Roles listId(int id);
    public void delete(int id);
    public void update(Roles r);

    public List<Roles> buscarService(String nombre);
}
