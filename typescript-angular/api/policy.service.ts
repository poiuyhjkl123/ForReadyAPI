/**
 * Alert Manager API Spec
 * Alert Manager API spec. This spec represents the Alert Management service whose current objective is to prioritize the alerts based upon context.  
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@dassana.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { DassanaPolicy } from '../model/dassanaPolicy';
import { FilterOptions } from '../model/filterOptions';
import { FilterSegment } from '../model/filterSegment';
import { FilterSegments } from '../model/filterSegments';
import { FilterSuggestions } from '../model/filterSuggestions';
import { HttpsapiSwaggerhubComapisDassanaGlobal100componentsschemasErrorInfo } from '../model/httpsapiSwaggerhubComapisDassanaGlobal100componentsschemasErrorInfo';
import { HttpsapiSwaggerhubComapisDassanaGlobal100componentsschemasInternalError } from '../model/httpsapiSwaggerhubComapisDassanaGlobal100componentsschemasInternalError';
import { RuleConfig } from '../model/ruleConfig';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class PolicyService {

    protected basePath = 'https://virtserver.swaggerhub.com/SmartBear-CC/Julia_09032021/1.0.0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Returns list of suggestions for a specific filter key and operator
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFilterOptionSuggestions(body: FilterSuggestions, observe?: 'body', reportProgress?: boolean): Observable<FilterSegments>;
    public getFilterOptionSuggestions(body: FilterSuggestions, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FilterSegments>>;
    public getFilterOptionSuggestions(body: FilterSuggestions, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FilterSegments>>;
    public getFilterOptionSuggestions(body: FilterSuggestions, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling getFilterOptionSuggestions.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<FilterSegments>('post',`${this.basePath}/policies/filter`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Returns list of filter options for policies
     * 
     * @param teamId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getFilterOptions(teamId: string, observe?: 'body', reportProgress?: boolean): Observable<FilterOptions>;
    public getFilterOptions(teamId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<FilterOptions>>;
    public getFilterOptions(teamId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<FilterOptions>>;
    public getFilterOptions(teamId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling getFilterOptions.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (teamId !== undefined && teamId !== null) {
            queryParameters = queryParameters.set('teamId', <any>teamId);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<FilterOptions>('get',`${this.basePath}/policies/filter`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * returns list of available operators
     * @param path 
     * @param alertId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getOperatorsForPath(path: string, alertId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<FilterSegment>>;
    public getOperatorsForPath(path: string, alertId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<FilterSegment>>>;
    public getOperatorsForPath(path: string, alertId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<FilterSegment>>>;
    public getOperatorsForPath(path: string, alertId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling getOperatorsForPath.');
        }

        if (alertId === null || alertId === undefined) {
            throw new Error('Required parameter alertId was null or undefined when calling getOperatorsForPath.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (path !== undefined && path !== null) {
            queryParameters = queryParameters.set('path', <any>path);
        }
        if (alertId !== undefined && alertId !== null) {
            queryParameters = queryParameters.set('alertId', <any>alertId);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<FilterSegment>>('get',`${this.basePath}/policies/conditions/suggestion/operators`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * returns list of available values
     * @param path 
     * @param operator 
     * @param alertId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getValuesForPathAndOperator(path: string, operator: string, alertId: string, observe?: 'body', reportProgress?: boolean): Observable<Array<FilterSegment>>;
    public getValuesForPathAndOperator(path: string, operator: string, alertId: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<FilterSegment>>>;
    public getValuesForPathAndOperator(path: string, operator: string, alertId: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<FilterSegment>>>;
    public getValuesForPathAndOperator(path: string, operator: string, alertId: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling getValuesForPathAndOperator.');
        }

        if (operator === null || operator === undefined) {
            throw new Error('Required parameter operator was null or undefined when calling getValuesForPathAndOperator.');
        }

        if (alertId === null || alertId === undefined) {
            throw new Error('Required parameter alertId was null or undefined when calling getValuesForPathAndOperator.');
        }

        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (path !== undefined && path !== null) {
            queryParameters = queryParameters.set('path', <any>path);
        }
        if (operator !== undefined && operator !== null) {
            queryParameters = queryParameters.set('operator', <any>operator);
        }
        if (alertId !== undefined && alertId !== null) {
            queryParameters = queryParameters.set('alertId', <any>alertId);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<FilterSegment>>('get',`${this.basePath}/policies/conditions /suggestion/values`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param id 
     * @param alertId 
     * @param teamId 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public policiesIdRuleConfigGet(id: string, alertId?: string, teamId?: string, observe?: 'body', reportProgress?: boolean): Observable<RuleConfig>;
    public policiesIdRuleConfigGet(id: string, alertId?: string, teamId?: string, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RuleConfig>>;
    public policiesIdRuleConfigGet(id: string, alertId?: string, teamId?: string, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RuleConfig>>;
    public policiesIdRuleConfigGet(id: string, alertId?: string, teamId?: string, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling policiesIdRuleConfigGet.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (alertId !== undefined && alertId !== null) {
            queryParameters = queryParameters.set('alertId', <any>alertId);
        }
        if (teamId !== undefined && teamId !== null) {
            queryParameters = queryParameters.set('teamId', <any>teamId);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<RuleConfig>('get',`${this.basePath}/policies/${encodeURIComponent(String(id))}/rule_config`,
            {
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param body 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public searchPolicy(body: any, observe?: 'body', reportProgress?: boolean): Observable<Array<DassanaPolicy>>;
    public searchPolicy(body: any, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<DassanaPolicy>>>;
    public searchPolicy(body: any, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<DassanaPolicy>>>;
    public searchPolicy(body: any, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling searchPolicy.');
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<Array<DassanaPolicy>>('post',`${this.basePath}/policies/search`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * 
     * 
     * @param alertId 
     * @param teamId 
     * @param id 
     * @param body 
     * @param test 
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updatePolicyConfig(alertId: string, teamId: string, id: string, body?: RuleConfig, test?: boolean, observe?: 'body', reportProgress?: boolean): Observable<RuleConfig>;
    public updatePolicyConfig(alertId: string, teamId: string, id: string, body?: RuleConfig, test?: boolean, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<RuleConfig>>;
    public updatePolicyConfig(alertId: string, teamId: string, id: string, body?: RuleConfig, test?: boolean, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<RuleConfig>>;
    public updatePolicyConfig(alertId: string, teamId: string, id: string, body?: RuleConfig, test?: boolean, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (alertId === null || alertId === undefined) {
            throw new Error('Required parameter alertId was null or undefined when calling updatePolicyConfig.');
        }

        if (teamId === null || teamId === undefined) {
            throw new Error('Required parameter teamId was null or undefined when calling updatePolicyConfig.');
        }

        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updatePolicyConfig.');
        }



        let queryParameters = new HttpParams({encoder: new CustomHttpUrlEncodingCodec()});
        if (alertId !== undefined && alertId !== null) {
            queryParameters = queryParameters.set('alertId', <any>alertId);
        }
        if (teamId !== undefined && teamId !== null) {
            queryParameters = queryParameters.set('teamId', <any>teamId);
        }
        if (test !== undefined && test !== null) {
            queryParameters = queryParameters.set('test', <any>test);
        }

        let headers = this.defaultHeaders;

        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<RuleConfig>('post',`${this.basePath}/policies/${encodeURIComponent(String(id))}/rule_config`,
            {
                body: body,
                params: queryParameters,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}
