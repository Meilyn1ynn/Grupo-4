package pe.edu.upc.apisanisidro.servicesinterfaces;

import pe.edu.upc.apisanisidro.entities.Visita;

import java.util.List;

public interface IVisitaService {
    public List<Visita> list();
    public void insert(Visita v);
    public Visita listId(int id);
    public void delete(int id);
    public void update(Visita v);
}
