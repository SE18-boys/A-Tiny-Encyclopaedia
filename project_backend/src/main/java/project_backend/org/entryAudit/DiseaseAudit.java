package project_backend.org.entryAudit;

import lombok.Data;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import javax.persistence.Transient;
import java.util.List;


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
    private String cure_prob;
    private String get_way;
    private String easy_get;
    private String desc;

    private List<String> accompany_diseases;
    private List<String> related_department;
    private List<String> common_drug;
    private List<String> recommand_drug;
    private List<String> do_eat;
    private List<String> drug_detail;
    private List<String> no_eat;
    private List<String> related_symptom;
    private List<String> need_check;
    private List<String> cure_by;
    private List<String> recommand_dish;

    public ObjectId getId() {
        return id;
    }

    public void setStringid(String stringid){
        this.stringid = stringid;
    }

    public String getStringid() {
        return stringid;
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

    public String getAudit_date() {
        return audit_date;
    }

    public void setAudit_date(String audit_date) {
        this.audit_date = audit_date;
    }
}
