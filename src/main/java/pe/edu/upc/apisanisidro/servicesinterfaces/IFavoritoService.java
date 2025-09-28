package pe.edu.upc.apisanisidro.servicesinterfaces;
import pe.edu.upc.apisanisidro.entities.Favorito;
import java.util.List;

public interface IFavoritoService {
    public List<Favorito> list();
    public void insert(Favorito f);
    public Favorito listId(int id);
    public void delete(int id);
    public void update(Favorito f);
}
