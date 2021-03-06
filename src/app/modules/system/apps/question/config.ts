import * as _ from 'lodash';
import { Injectable } from '@angular/core';

var status_source = [
	{label: "启用", value: 1},
	{label: "禁用", value: 2}
]


export class QuestionService {
	config = {}
    constructor() {
		this.config = {
			resource:"question",
			treeable:false,
			fields : {
				name:{
					label:"名称",
					widget:"text",
					titleabled :true,
					require:true
				},
				enabled_status:{
					label:"启用状态",
					widget:"select",
					dataSource:status_source,
					require:true,
					get_display:function(item){
						if(item["enabled_status"]==1)
							return "启用"
						else if(item["enabled_status"]==2)
							return "禁用"
						return ""
					}
				}
			}
		}
	}

}
