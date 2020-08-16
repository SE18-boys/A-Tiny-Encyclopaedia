package project_backend.org.entity;
import org.hibernate.annotations.GenericGenerator;
import org.neo4j.ogm.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.GeneratedValue;
import java.util.Set;

@Document(collection = "UserDisease")
public class UserDisease {
    @Id
    @GeneratedValue(generator = "increment")
    @GenericGenerator(name = "increment", strategy = "increment")
    private Long id;

    private String prevent;
    private String yibao;
    private String cost;
    private String get_prob;
    private String name;
    private String cause;
    private String curelasttime;
    private String cure_prob;
    private String getway;
    private String easyget;
    private String desc;

    private Set<String> accompany;
    private Set<String> cure_department;
    private Set<String> common_drug;
    private Set<String> recommand_drug;
    private Set<String> do_eat;
    private Set<String> drug_detail;
    private Set<String> no_eat;
    private Set<String> symptom;
    private Set<String> check;
    private Set<String> cure_way;
    private Set<String> recommend_dish;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPrevent() {
        return prevent;
    }

    public void setPrevent(String prevent) {
        this.prevent = prevent;
    }

    public String getYibao() {
        return yibao;
    }

    public void setYibao(String yibao) {
        this.yibao = yibao;
    }

    public String getCost() {
        return cost;
    }

    public void setCost(String cost) {
        this.cost = cost;
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

    public String getCurelasttime() {
        return curelasttime;
    }

    public void setCurelasttime(String curelasttime) {
        this.curelasttime = curelasttime;
    }

    public String getCure_prob() {
        return cure_prob;
    }

    public void setCure_prob(String cure_prob) {
        this.cure_prob = cure_prob;
    }

    public String getGetway() {
        return getway;
    }

    public void setGetway(String getway) {
        this.getway = getway;
    }

    public String getEasyget() {
        return easyget;
    }

    public void setEasyget(String easyget) {
        this.easyget = easyget;
    }

    public String getDesc() {
        return desc;
    }

    public void setDesc(String desc) {
        this.desc = desc;
    }

    public Set<String> getAccompany() {
        return accompany;
    }

    public void setAccompany(Set<String> accompany) {
        this.accompany = accompany;
    }

    public Set<String> getCure_department() {
        return cure_department;
    }

    public void setCure_department(Set<String> cure_department) {
        this.cure_department = cure_department;
    }

    public Set<String> getCommon_drug() {
        return common_drug;
    }

    public void setCommon_drug(Set<String> common_drug) {
        this.common_drug = common_drug;
    }

    public Set<String> getRecommand_drug() {
        return recommand_drug;
    }

    public void setRecommand_drug(Set<String> recommand_drug) {
        this.recommand_drug = recommand_drug;
    }

    public Set<String> getDo_eat() {
        return do_eat;
    }

    public void setDo_eat(Set<String> do_eat) {
        this.do_eat = do_eat;
    }

    public Set<String> getDrug_detail() {
        return drug_detail;
    }

    public void setDrug_detail(Set<String> drug_detail) {
        this.drug_detail = drug_detail;
    }

    public Set<String> getNo_eat() {
        return no_eat;
    }

    public void setNo_eat(Set<String> no_eat) {
        this.no_eat = no_eat;
    }

    public Set<String> getSymptom() {
        return symptom;
    }

    public void setSymptom(Set<String> symptom) {
        this.symptom = symptom;
    }

    public Set<String> getCheck() {
        return check;
    }

    public void setCheck(Set<String> check) {
        this.check = check;
    }

    public Set<String> getCure_way() {
        return cure_way;
    }

    public void setCure_way(Set<String> cure_way) {
        this.cure_way = cure_way;
    }

    public Set<String> getRecommend_dish() {
        return recommend_dish;
    }

    public void setRecommend_dish(Set<String> recommend_dish) {
        this.recommend_dish = recommend_dish;
    }
}
