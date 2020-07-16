#!/usr/bin/env python3
# coding: utf-8
# File: MedicalGraph.py
# Author: lhy<lhy_in_blcu@126.com,https://huangyong.github.io>
# Date: 18-10-3


# update by ZY 
# re-build the node and relation
#
import os
import json
from py2neo import Graph, Node


class MedicalGraph:
    def __init__(self):
        # cur_dir = '/'.join(os.path.abspath(__file__).split('/')[:-1])

        # self.data_path = os.path.join(cur_dir, 'data/medical.json')
        # self.data_path = 'C:/Users/BoringYang/Desktop/summer/medical.json'  # absolute path
        self.data_path = 'D:/test1.json'  # test json
        self.g = Graph(
            host="localhost",  # neo4j 搭载服务器的ip地址，ifconfig可获取到
            http_port=7474,  # neo4j 服务器监听的端口号
            user="neo4j",  # 数据库user name，如果没有更改过，应该是neo4j
            password="123456")

    '''读取文件'''

    def read_nodes(self):
        # 共9类节点
        diseases = []  # 疾病
        symptoms = []  # 症状
        departments = []  # 科室
        cure_ways = []  # 治疗方式
        checks = []  # 检查
        foods = []  # 　食物
        dishes = []  # 推荐菜肴
        drugs = []  # 药品
        drug_details = []  # 具体药物产品（带品牌名）


        disease_infos = []  # 疾病信息

        # 构建节点实体关系
        rels_symptom = []  # 疾病症状关系
        rels_acompany = []  # 疾病并发关系
        rels_cure_department = []  # 　疾病－科室关系
        rels_cure_way = []  # 疾病-治疗方式关系
        rels_check = []  # 疾病－检查关系
        rels_doeat = []  # 疾病－宜吃食物关系
        rels_noteat = []  # 疾病－忌吃食物关系
        rels_commondrug = []  # 疾病－通用药品关系
        rels_recommenddrug = []  # 疾病－热门药品关系
        rels_recommend_dish = []  # 疾病-推荐菜品关系
        rels_drug_detail = []  # 疾病和具体药品关系

        count = 0
        for data in open(self.data_path, encoding='utf-8'):
            disease_dict = {}
            count += 1
            print(count)
            data_json = json.loads(data)
            disease = data_json['name']
            disease_dict['name'] = disease
            diseases.append(disease)
            disease_dict['desc'] = ''
            disease_dict['prevent'] = ''
            disease_dict['cause'] = ''
            disease_dict['yibao_status'] = ''
            disease_dict['get_prob'] = ''
            disease_dict['easy_get'] = ''
            disease_dict['cure_lasttime'] = ''
            disease_dict['cured_prob'] = ''
            disease_dict['cost_money'] = ''
            disease_dict['get_way'] = ''
        

            # disease_dict['cure_department'] = ''
            # disease_dict['cure_way'] = ''

            # disease_dict['symptom'] = ''

            # 疾病的简单属性
            if 'desc' in data_json:
                disease_dict['desc'] = data_json['desc']

            if 'prevent' in data_json:
                disease_dict['prevent'] = data_json['prevent']

            if 'cause' in data_json:
                disease_dict['cause'] = data_json['cause']

            if 'yibao_status' in data_json:
                disease_dict['yibao_status'] = data_json['yibao_status']

            if 'get_prob' in data_json:
                disease_dict['get_prob'] = data_json['get_prob']

            if 'easy_get' in data_json:
                disease_dict['easy_get'] = data_json['easy_get']

            if 'cure_lasttime' in data_json:
                disease_dict['cure_lasttime'] = data_json['cure_lasttime']

            if 'cured_prob' in data_json:
                disease_dict['cured_prob'] = data_json['cured_prob']

            if 'cost_money' in data_json:
                disease_dict['cost_money'] = data_json['cost_money']

            if 'get_way' in data_json:
                disease_dict['get_way'] = data_json['get_way']

            disease_infos.append(disease_dict)

            # 疾病的关系属性，也就是多对多的关系
            if 'symptom' in data_json:
                symptoms += data_json['symptom']
                for symptom in data_json['symptom']:
                    rels_symptom.append([disease, symptom])
                    # if symptom not in symptoms:
                    #     print("get symptom")
                    #     symptoms += symptom

            if 'acompany' in data_json:
                for acompany in data_json['acompany']:
                    rels_acompany.append([disease, acompany])

            if 'cure_department' in data_json:
                departments += data_json['cure_department']
                for cure_department in data_json['cure_department']:
                    rels_cure_department.append([disease, cure_department])
                    # if cure_department not in departments:
                    #     departments += cure_department

            if 'cure_way' in data_json:
                cure_ways += data_json['cure_way']
                for cure_way in data_json['cure_way']:
                    rels_cure_way.append([disease, cure_way])
                    # if cure_way not in cure_ways:
                    #     cure_ways += cure_way

            if 'check' in data_json:
                checks += data_json['check']
                for check in data_json['check']:
                    rels_check.append([disease, check])
                    # if check not in checks:
                    #     print(check)
                    #     input()
                    #     checks += check

            if 'do_eat' in data_json:
                foods += data_json['do_eat']
                for do_eat in data_json['do_eat']:
                    rels_doeat.append([disease, do_eat])
                    # if do_eat not in foods:
                    #     foods += do_eat

            if 'not_eat' in data_json:
                foods += data_json['not_eat']
                for not_eat in data_json['not_eat']:
                    rels_noteat.append([disease, not_eat])
                    # if not_eat not in foods:
                    #     foods += not_eat

            if 'recommand_eat' in data_json:
                dishes += data_json['recommand_eat']
                for recommend_dish in data_json['recommand_eat']:
                    rels_recommend_dish.append([disease, recommend_dish])
                    # if recommend_dish not in dishes:
                    #     dishes += recommend_dish

            if 'common_drug' in data_json:
                drugs += data_json['common_drug']
                for common_drug in data_json['common_drug']:
                    rels_commondrug.append([disease, common_drug])
                    # if common_drug not in drugs:
                    #     drugs += common_drug

            if 'recommand_drug' in data_json:
                drugs += data_json['recommand_drug']
                for recommend_drug in data_json['recommand_drug']:
                    rels_recommenddrug.append([disease, recommend_drug])
                    # if recommend_drug not in drugs:
                    #    drugs += recommend_drug

            if 'drug_detail' in data_json:
                drug_details += data_json['drug_detail']
                for drug_detail in data_json['drug_detail']:
                    rels_drug_detail.append([disease, drug_detail])
                    # if drug_detail not in drug_details:
                    #    drug_details += drug_detail

            
        return set(diseases), set(symptoms), set(departments), set(cure_ways), set(checks), set(foods), set(dishes), set(drugs), set(drug_details), disease_infos,\
            rels_check, rels_recommend_dish, rels_noteat, rels_doeat, rels_cure_department, rels_commondrug,rels_recommenddrug,\
            rels_symptom, rels_acompany,rels_drug_detail,rels_cure_way

      

       
    '''建立节点'''

    def create_node(self, label, nodes):
        count = 0
        for node_name in nodes:
            node = Node(label, name=node_name)
            self.g.create(node)
            count += 1
            print(count, len(nodes))
        return

    '''创建知识图谱中心疾病的节点'''

    def create_diseases_nodes(self, disease_infos):
        count = 0
        for disease_dict in disease_infos:
            node = Node("Disease", name=disease_dict['name'], desc=disease_dict['desc'],
                        prevent=disease_dict['prevent'], cause=disease_dict['cause'],yibao_status=disease_dict['yibao_status'],
                        get_prob=disease_dict['get_prob'],easy_get=disease_dict['easy_get'], cure_lasttime=disease_dict['cure_lasttime'],
                        cured_prob=disease_dict['cured_prob'],cost_money=disease_dict['cost_money'],get_way=disease_dict['get_way'])
            self.g.create(node)
            count += 1
            print(count)
        return

    '''创建知识图谱实体节点类型schema'''

    def create_graphnodes(self):
        Diseases,Symptoms,Departments,Cure_ways,Checks,Foods,Dishes,Drugs,Drug_details,disease_infos,\
            rels_check, rels_recommend_dish, rels_noteat, rels_doeat, rels_cure_department, rels_commondrug, rels_recommenddrug,\
            rels_symptom, rels_acompany, rels_drug_detail, rels_cure_way = self.read_nodes()
        # print(216)
        # input()
        self.create_diseases_nodes(disease_infos)
        # input()
        self.create_node('Drug', Drugs)
        # input()
        self.create_node('Symptom', Symptoms)
        # input()
        self.create_node('Cure_way', Cure_ways)
        # input()
        self.create_node('Food', Foods)
        # input()
        self.create_node('Dish', Dishes)
        # input()
        self.create_node('Check', Checks)
        # input()
        self.create_node('Department', Departments)
        # input()
        self.create_node('Drug_detail', Drug_details)
        return

    '''创建实体关系边'''

    def create_graphrels(self):
        Diseases,Symptoms,Departments,Cure_ways,Checks,Foods,Dishes,Drugs,Drug_details,disease_infos,\
            rels_check, rels_recommend_dish, rels_noteat, rels_doeat, rels_cure_department, rels_commondrug, rels_recommenddrug,\
            rels_symptom, rels_acompany, rels_drug_detail, rels_cure_way = self.read_nodes()
        

        self.create_relationship('Disease', 'Symptom',rels_symptom, 'has_symptom', '症状')
        self.create_relationship('Disease', 'Disease',rels_acompany, 'acompany_with', '并发症')
        self.create_relationship('Disease', 'Department', rels_cure_department, 'cure_in', '就诊科室')
        self.create_relationship('Disease', 'Cure_way', rels_cure_way, 'cure_by', '治疗方式')
        self.create_relationship('Disease', 'Check', rels_check, 'need_check', '检查项目')
        self.create_relationship('Disease', 'Food', rels_doeat, 'do_eat', '宜吃')
        self.create_relationship('Disease', 'Food', rels_noteat, 'not_eat', '禁忌食物')
        self.create_relationship('Disease', 'Dish', rels_recommend_dish, 'recommend_dish', '推荐菜品')
        self.create_relationship('Disease', 'Drug', rels_commondrug, 'common_drug', '常用药品')
        self.create_relationship('Disease', 'Drug_detail', rels_drug_detail, 'drug_detail', '具体药品')
        self.create_relationship('Disease', 'Drug', rels_recommenddrug, 'recommend_drug', '好评药品')

    '''创建实体关联边'''

    def create_relationship(self, start_node, end_node, edges, rel_type, rel_name):
        count = 0
        # 去重处理
        set_edges = []
        for edge in edges:
            set_edges.append('###'.join(edge))
        all = len(set(set_edges))
        for edge in set(set_edges):
            edge = edge.split('###')
            p = edge[0]
            q = edge[1]
            query = "match(p:%s),(q:%s) where p.name=\"%s\"and q.name=\"%s\" create (p)-[rel:%s{name:\"%s\"}]->(q)" % (
                start_node, end_node, p, q, rel_type, rel_name)
            
            self.g.run(query)
            count += 1
                # print(rel_type, count, all)
            # except Exception as e:
                # print(e)
        return

    '''导出数据'''

    def export_data(self):
        Diseases,Symptoms,Departments,Cure_ways,Checks,Foods,Dishes,Drugs,Drug_details,disease_infos,\
            rels_check, rels_recommend_dish, rels_noteat, rels_doeat, rels_cure_department, rels_commondrug, rels_recommenddrug,\
            rels_symptom, rels_acompany, rels_drug_detail, rels_cure_way = self.read_nodes()
        f_disease = open('disease.txt', 'w+')
        f_symptom = open('symptoms.txt', 'w+')
        f_cure_department = open('cure_department.txt', 'w+')
        f_check = open('check.txt', 'w+')
        f_cure_way = open('cure_way.txt', 'w+')
        f_drug = open('drug.txt', 'w+')
        f_food = open('food.txt', 'w+')
        f_dish = open('cure_dish.txt', 'w+')
        f_drug_detail = open('drug_tail.txt', 'w+')
    
    
        f_disease.write('\n'.join(list(Diseases)))
        f_symptom.write('\n'.join(list(Symptoms)))
        f_cure_department.write('\n'.join(list(Departments)))
        f_cure_way.write('\n'.join(list(Cure_ways)))
        f_check.write('\n'.join(list(Checks)))
        f_drug.write('\n'.join(list(Drugs)))
        f_food.write('\n'.join(list(Foods)))
        f_dish.write('\n'.join(list(Dishes)))
        f_drug_detail.write('\n'.join(list(Drug_details)))




        f_drug.close()
        f_food.close()
        f_check.close()
        f_cure_department.close()
        f_cure_way.close()
        f_disease.close()
        f_symptom.close()
        f_dish.close()
        f_drug_detail.close()


        return


if __name__ == '__main__':
    # print("hhh")
    # input()1
    # input()

    handler = MedicalGraph()
    # input()
    # input()
    handler.create_graphnodes()
    # print("finish create nodes")
    # input()
    # input()
    handler.create_graphrels()
    # input()
    # input()

    # handler.export_data()
