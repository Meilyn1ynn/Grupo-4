package pe.edu.upc.apisanisidro.servicesinterfaces;
import pe.edu.upc.apisanisidro.entities.PropiedadFoto;
import java.util.List;

public interface IPropiedadFotoService {
    public List<PropiedadFoto> list();
    public void insert(PropiedadFoto pf);
    public PropiedadFoto listId(int id);
    public void delete(int id);
    public void update(PropiedadFoto pf);
}
