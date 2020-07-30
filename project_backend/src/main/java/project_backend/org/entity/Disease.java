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
    private String cured_prob;
    private String get_way;
    private String easy_get;
    private String desc;

    public Disease(){

    }

    @Relationship(type ="accompany_with",direction = Relationship.OUTGOING)
    private Set<Disease> accompany;
    public void addAccompany_disease(Disease disease){
        if(accompany == null) {
            accompany = new HashSet<>();
        }
        accompany.add(disease);
    }

    @Relationship(type = "cure_in",direction =Relationship.OUTGOING)
    private Set<Department> cure_department;
    public void addRelated_department(Department department){
        if(cure_department == null) {
            cure_department = new HashSet<>();
        }
        cure_department.add(department);
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
    private Set<Drug> recommend_drug;
    public void addRecommend_drug(Drug drug){
        if(recommend_drug == null) {
            recommend_drug = new HashSet<>();
        }
        recommend_drug.add(drug);
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
    private Set<Symptom> symptom;
    public void addRelated_symptom(Symptom newOne){
        if(symptom == null) {
            symptom = new HashSet<>();
        }
        symptom.add(newOne);
    }

    @Relationship(type = "need_check",direction = Relationship.OUTGOING)
    private Set<Check> check;
    public void addNeed_check(Check newOne){
        if(check == null) {
            check = new HashSet<>();
        }
        check.add(newOne);
    }

    @Relationship(type = "cure_by",direction = Relationship.OUTGOING)
    private Set<Cure_way> cure_way;
    public void addCure_by(Cure_way newOne){
        if(cure_way == null) {
            cure_way = new HashSet<>();
        }
        cure_way.add(newOne);
    }

    @Relationship(type = "recommand_dish",direction = Relationship.OUTGOING)
    private Set<Dish> recommend_dish;
    public void addRecommend_dish(Dish dish){
        if(recommend_dish == null) {
            recommend_dish = new HashSet<>();
        }
        recommend_dish.add(dish);
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

    public String getYibao_status() {
        return yibao_status;
    }

    public void setYibao_status(String yibao_status) {
        this.yibao_status = yibao_status;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCause() {
        return cause;
    }

    public void setCause(String cause) {
        this.cause = cause;
    }

    public String getCure_lasttime() {
        return cure_lasttime;
    }

    public void setCure_lasttime(String cure_lasttime) {
        this.cure_lasttime = cure_lasttime;
    }

    public String getCured_prob() {
        return cured_prob;
    }

    public void setCured_prob(String cured_prob) {
        this.cured_prob = cured_prob;
    }

    public String getGet_way() {
        return get_way;
    }

    public void setGet_way(String get_way) {
        this.get_way = get_way;
    }

    public String getEasy_get() {
        return easy_get;
    }

    public void setEasy_get(String easy_get) {
        this.easy_get = easy_get;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Set<Disease> getAccompany() {
        return accompany;
    }

    public void setAccompany(Set<Disease> accompany) {
        this.accompany = accompany;
    }

    public Set<Department> getCure_department() {
        return cure_department;
    }

    public void setCure_department(Set<Department> cure_department) {
        this.cure_department = cure_department;
    }

    public Set<Drug> getCommon_drug() {
        return common_drug;
    }

    public void setCommon_drug(Set<Drug> common_drug) {
        this.common_drug = common_drug;
    }

    public Set<Drug> getRecommend_drug() {
        return recommend_drug;
    }

    public void setRecommend_drug(Set<Drug> recommend_drug) {
        this.recommend_drug = recommend_drug;
    }

    public Set<Food> getDo_eat() {
        return do_eat;
    }

    public void setDo_eat(Set<Food> do_eat) {
        this.do_eat = do_eat;
    }

    public Set<Drug_detail> getDrug_detail() {
        return drug_detail;
    }

    public void setDrug_detail(Set<Drug_detail> drug_detail) {
        this.drug_detail = drug_detail;
    }

    public Set<Food> getNo_eat() {
        return no_eat;
    }

    public void setNo_eat(Set<Food> no_eat) {
        this.no_eat = no_eat;
    }

    public Set<Symptom> getSymptom() {
        return symptom;
    }

    public void setSymptom(Set<Symptom> symptom) {
        this.symptom = symptom;
    }

    public Set<Check> getCheck() {
        return check;
    }

    public void setCheck(Set<Check> check) {
        this.check = check;
    }

    public Set<Cure_way> getCure_way() {
        return cure_way;
    }

    public void setCure_way(Set<Cure_way> cure_way) {
        this.cure_way = cure_way;
    }

    public Set<Dish> getRecommend_dish() {
        return recommend_dish;
    }

    public void setRecommend_dish(Set<Dish> recommend_dish) {
        this.recommend_dish = recommend_dish;
    }
}
