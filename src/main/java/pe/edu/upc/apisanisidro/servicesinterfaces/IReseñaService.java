package pe.edu.upc.apisanisidro.servicesinterfaces;
import pe.edu.upc.apisanisidro.entities.Reseña;
import java.util.List;

public interface IReseñaService {
    public List<Reseña> list();
    public void insert(Reseña r);
    public Reseña listId(int id);
    public void delete(int id);
    public void update(Reseña r);
}
