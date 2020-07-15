package project_backend.org.entity;
import org.neo4j.ogm.annotation.GeneratedValue;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
import org.neo4j.ogm.annotation.Relationship;

import java.util.HashSet;
import java.util.Set;

@NodeEntity
public class Disease {
    @Id
    @GeneratedValue
    private long id;

    private String prevent;
    private String yibao_status;
    private String cost_money;
    private String get_prob;
    private String name;
    private String cause;
    private String cure_lasttime;
    private String cure_prob;
    private String get_way;
    private String easy_get;
    private String desc;

    public Disease(){

    }

    @Relationship(type ="accompany_with",direction = Relationship.OUTGOING)
    private Set<Disease> accompany_diseases;
    public void addAccompany_disease(Disease disease){
        if(accompany_diseases == null) {
            accompany_diseases = new HashSet<>();
        }
        accompany_diseases.add(disease);
    }
    public void updateAccompany_diseases(Set<Disease> diseases){
        accompany_diseases = diseases;
    }

    @Relationship(type = "cure_in",direction =Relationship.OUTGOING)
    private Set<Department> related_department;
    public void addRelated_department(Department department){
        if(related_department == null) {
            related_department = new HashSet<>();
        }
        related_department.add(department);
    }

    @Relationship(type = "common_drug",direction = Relationship.OUTGOING)
    private Set<Drug> common_drug;
    public void addCommon_drug(Drug drug){
        if(common_drug == null) {
            common_drug = new HashSet<>();
        }
        common_drug.add(drug);
    }

    @Relationship(type = "recommand_drug",direction = Relationship.OUTGOING)
    private Set<Drug> recommand_drug;
    public void addRecommand_drug(Drug drug){
        if(recommand_drug == null) {
            recommand_drug = new HashSet<>();
        }
        recommand_drug.add(drug);
    }

    @Relationship(type = "do_eat",direction = Relationship.OUTGOING)
    private Set<Food> do_eat;
    public void addDo_eat(Food food){
        if(do_eat == null) {
            do_eat = new HashSet<>();
        }
        do_eat.add(food);
    }

    @Relationship(type = "drug_detail",direction = Relationship.OUTGOING)
    private Set<Drug_detail> drug_detail;
    public void addDrug_detail(Drug_detail detail){
        if(drug_detail == null) {
            drug_detail = new HashSet<>();
        }
        drug_detail.add(detail);
    }

    @Relationship(type = "no_eat",direction = Relationship.OUTGOING)
    private Set<Food> no_eat;

    @Relationship(type = "has_symptom",direction = Relationship.OUTGOING)
    private Set<Symptom> related_symptom;
    public void addRelated_symptom(Symptom symptom){
        if(related_symptom == null) {
            related_symptom = new HashSet<>();
        }
        related_symptom.add(symptom);
    }

    @Relationship(type = "need_check",direction = Relationship.OUTGOING)
    private Set<Check> need_check;
    public void addNeed_check(Check check){
        if(need_check == null) {
            need_check = new HashSet<>();
        }
        need_check.add(check);
    }

    @Relationship(type = "cure_by",direction = Relationship.OUTGOING)
    private Set<Cure_way> cure_by;
    public void addCure_by(Cure_way cure_way){
        if(cure_by == null) {
            cure_by = new HashSet<>();
        }
        cure_by.add(cure_way);
    }

    @Relationship(type = "recommand_dish",direction = Relationship.OUTGOING)
    private Set<Dish> recommand_dish;
    public void addRecommand_dish(Dish dish){
        if(recommand_dish == null) {
            recommand_dish = new HashSet<>();
        }
        recommand_dish.add(dish);
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPrevent() {
        return prevent;
    }
    public void setPrevent(String prevent) {
        this.prevent = prevent;
    }

    public String getCost_money() {
        return cost_money;
    }
    public void setCost_money(String cost_money) {
        this.cost_money = cost_money;
    }

    public String getGet_prob() {
        return get_prob;
    }
    public void setGet_prob(String get_prob) {
        this.get_prob = get_prob;
    }

    public String getCure_lasttime() {
        return cure_lasttime;
    }
    public void setCure_lasttime(String cure_lasttime) {
        this.cure_lasttime = cure_lasttime;
    }

    public String getCure_prob() {
        return cure_prob;
    }
    public void setCure_prob(String cure_prob) {
        this.cure_prob = cure_prob;
    }

    public String getCause() {
        return cause;
    }
    public void setCause(String cause) {
        this.cause = cause;
    }

    public String getDesc() {
        return desc;
    }
    public void setDesc(String desc) {
        this.desc = desc;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

    public String getEasy_get() {
        return easy_get;
    }
    public void setEasy_get(String easy_get) {
        this.easy_get = easy_get;
    }

    public String getGet_way() {
        return get_way;
    }
    public void setGet_way(String get_way) {
        this.get_way = get_way;
    }

    public String getYibao_status() {
        return yibao_status;
    }
    public void setYibao_status(String yibao_status) {
        this.yibao_status = yibao_status;
    }
}
