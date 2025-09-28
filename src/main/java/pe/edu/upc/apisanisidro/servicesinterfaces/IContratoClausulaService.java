package pe.edu.upc.apisanisidro.servicesinterfaces;
import pe.edu.upc.apisanisidro.entities.ContratoClausula;
import java.util.List;

public interface IContratoClausulaService {
    public List<ContratoClausula> list();
    public void insert(ContratoClausula cc);
    public ContratoClausula listId(int id);
    public void delete(int id);
    public void update(ContratoClausula cc);
}
