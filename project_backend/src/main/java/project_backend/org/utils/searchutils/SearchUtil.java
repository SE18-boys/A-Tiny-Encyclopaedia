package project_backend.org.utils.searchutils;

import project_backend.org.entity.Disease;

import java.util.List;

public class SearchUtil {
    private int status;
    private List<String> possible_names;
    private Disease result;

    public SearchUtil(int status,Disease result){
        this.possible_names=null;
        this.result=result;
        this.status=status;
    }

    public SearchUtil(int status){
        this.status=status;
        this.possible_names=null;
        this.result=null;
    }

    public SearchUtil(int status,List<String>possible_names){
        this.result=null;
        this.status=status;
        this.possible_names=possible_names;
    }

    public SearchUtil(int status,List<String>possible_names,Disease disease){
        this.result=disease;
        this.status=status;
        this.possible_names=possible_names;
    }

    public Disease getResult() {
        return result;
    }

    public void setResult(Disease result) {
        this.result = result;
    }

    public int getStatus() {
        return status;
    }

    public void setStatus(int status) {
        this.status = status;
    }

    public List<String> getPossible_names() {
        return possible_names;
    }

    public void setPossible_names(List<String> possible_names) {
        this.possible_names = possible_names;
    }
}
