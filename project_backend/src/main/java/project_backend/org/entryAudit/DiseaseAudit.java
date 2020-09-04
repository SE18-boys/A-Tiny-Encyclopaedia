package project_backend.org.entryAudit;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Transient;
import java.util.Set;

@JsonIgnoreProperties({ "id" })
@Document(collection="audit")
@Data
public class DiseaseAudit {

    @Id
    private ObjectId id;
    @Transient
    private String stringid;
    private String status;
    private String reason;
    private String submit_date;
    private String audit_date;

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

    private Set<String> accompany;
    private Set<String> cure_department;
    private Set<String> common_drug;
    private Set<String> recommend_drug;
    private Set<String> do_eat;
    private Set<String> drug_detail;
    private Set<String> not_eat;
    private Set<String> symptom;
    private Set<String> check;
    private Set<String> cure_way;
    private Set<String> recommend_dish;

    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getStringid() {
        return stringid;
    }

    public void setStringid(String stringid) {
        this.stringid = stringid;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getSubmit_date() {
        return submit_date;
    }

    public void setSubmit_date(String submit_date) {
        this.submit_date = submit_date;
    }

    public String getAudit_date() {
        return audit_date;
    }

    public void setAudit_date(String audit_date) {
        this.audit_date = audit_date;
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

    public Set<String> getRecommend_drug() {
        return recommend_drug;
    }

    public void setRecommend_drug(Set<String> recommend_drug) {
        this.recommend_drug = recommend_drug;
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

    public Set<String> getNot_eat() {
        return not_eat;
    }

    public void setNot_eat(Set<String> not_eat) {
        this.not_eat = not_eat;
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
