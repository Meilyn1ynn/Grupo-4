package pe.edu.upc.apisanisidro.servicesinterfaces;

import pe.edu.upc.apisanisidro.entities.Contrato;

import java.util.List;

public interface IContratoService {
    public List<Contrato> list();
    public void insert(Contrato c);
    public Contrato listId(int id);
    public void delete(int id);
    public void update(Contrato c);
}
