import { Action } from 'redux';
import AdminModel from '../models/admin-model';
import { adminListConstants } from '../constants/admin-list-constants';

export interface IActionAdminListBegin extends Action {
    type: adminListConstants.ADMIN_LIST_BEGIN
}

export interface IActionAdminListlSuccess extends Action {
    type: adminListConstants.ADMIN_LIST_SUCCESS,
    //data: AdminModel
    data: Array<any>
}

export interface IActionAdminListError extends Action {
    type: adminListConstants.ADMIN_LIST_ERROR,
    error: any
}

// search admin

export interface IActionAdminSearchBegin extends Action {
    type: adminListConstants.ADMIN_SEARCH_BEGIN
}

export interface IActionAdminSearchSuccess extends Action {
    type: adminListConstants.ADMIN_SEARCH_SUCCESS,
    //data: AdminModel
    data: Array<any>
}

export interface IActionAdminSearchError extends Action {
    type: adminListConstants.ADMIN_SEARCH_ERROR,
    error: any
}

export type AdminListType = IActionAdminListBegin | IActionAdminListlSuccess | IActionAdminListError | IActionAdminSearchBegin | IActionAdminSearchSuccess | IActionAdminSearchError;