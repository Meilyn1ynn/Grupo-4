package pe.edu.upc.apisanisidro.servicesinterfaces;
import pe.edu.upc.apisanisidro.entities.Propiedad;
import java.util.List;

public interface IPropiedadService {
    public List<Propiedad> list();
    public void insert(Propiedad p);
    public Propiedad listId(int id);
    public void delete(int id);
    public void update(Propiedad p);

    public List<Propiedad> buscarService(String nombre);
}
