/*
 * Alert Manager API Spec
 *
 * Alert Manager API spec. This spec represents the Alert Management service whose current objective is to prioritize the alerts based upon context.  
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@dassana.io
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */
using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Swashbuckle.AspNetCore.Annotations;
using Swashbuckle.AspNetCore.SwaggerGen;
using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;
using IO.Swagger.Attributes;

using Microsoft.AspNetCore.Authorization;
using IO.Swagger.Models;

namespace IO.Swagger.Controllers
{ 
    /// <summary>
    /// 
    /// </summary>
    [ApiController]
    public class PolicyApiController : ControllerBase
    { 
        /// <summary>
        /// Returns list of suggestions for a specific filter key and operator
        /// </summary>
        /// <param name="body"></param>
        /// <response code="200">List of suggestions</response>
        /// <response code="400">Bad request</response>
        /// <response code="401">We couldn&#x27;t authenticate you</response>
        /// <response code="500">An internal error has occurred</response>
        [HttpPost]
        [Route("/SmartBear-CC/Julia_09032021/1.0.0/policies/filter")]
        [ValidateModelState]
        [SwaggerOperation("GetFilterOptionSuggestions")]
        [SwaggerResponse(statusCode: 200, type: typeof(FilterSegments), description: "List of suggestions")]
        [SwaggerResponse(statusCode: 400, type: typeof(List<ErrorInfo>), description: "Bad request")]
        [SwaggerResponse(statusCode: 401, type: typeof(string), description: "We couldn&#x27;t authenticate you")]
        [SwaggerResponse(statusCode: 500, type: typeof(List<InternalError>), description: "An internal error has occurred")]
        public virtual IActionResult GetFilterOptionSuggestions([FromBody]FilterSuggestions body)
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(FilterSegments));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400, default(List<ErrorInfo>));

            //TODO: Uncomment the next line to return response 401 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(401, default(string));

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(List<InternalError>));
            string exampleJson = null;
            exampleJson = "[ {\n  \"id\" : \"id\",\n  \"value\" : \"value\"\n}, {\n  \"id\" : \"id\",\n  \"value\" : \"value\"\n} ]";
            
                        var example = exampleJson != null
                        ? JsonConvert.DeserializeObject<FilterSegments>(exampleJson)
                        : default(FilterSegments);            //TODO: Change the data returned
            return new ObjectResult(example);
        }

        /// <summary>
        /// Returns list of filter options for policies
        /// </summary>
        /// <param name="teamId"></param>
        /// <response code="200">List of filter options</response>
        /// <response code="400">Bad request</response>
        /// <response code="401">We couldn&#x27;t authenticate you</response>
        /// <response code="500">An internal error has occurred</response>
        [HttpGet]
        [Route("/SmartBear-CC/Julia_09032021/1.0.0/policies/filter")]
        [ValidateModelState]
        [SwaggerOperation("GetFilterOptions")]
        [SwaggerResponse(statusCode: 200, type: typeof(FilterOptions), description: "List of filter options")]
        [SwaggerResponse(statusCode: 400, type: typeof(List<ErrorInfo>), description: "Bad request")]
        [SwaggerResponse(statusCode: 401, type: typeof(string), description: "We couldn&#x27;t authenticate you")]
        [SwaggerResponse(statusCode: 500, type: typeof(List<InternalError>), description: "An internal error has occurred")]
        public virtual IActionResult GetFilterOptions([FromQuery][Required()]string teamId)
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(FilterOptions));

            //TODO: Uncomment the next line to return response 400 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(400, default(List<ErrorInfo>));

            //TODO: Uncomment the next line to return response 401 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(401, default(string));

            //TODO: Uncomment the next line to return response 500 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(500, default(List<InternalError>));
            string exampleJson = null;
            exampleJson = "[ {\n  \"static\" : true,\n  \"values\" : [ null, null ],\n  \"key\" : \"region\",\n  \"operator\" : [ {\n    \"id\" : \"id\",\n    \"value\" : \"value\"\n  }, {\n    \"id\" : \"id\",\n    \"value\" : \"value\"\n  } ]\n}, {\n  \"static\" : true,\n  \"values\" : [ null, null ],\n  \"key\" : \"region\",\n  \"operator\" : [ {\n    \"id\" : \"id\",\n    \"value\" : \"value\"\n  }, {\n    \"id\" : \"id\",\n    \"value\" : \"value\"\n  } ]\n} ]";
            
                        var example = exampleJson != null
                        ? JsonConvert.DeserializeObject<FilterOptions>(exampleJson)
                        : default(FilterOptions);            //TODO: Change the data returned
            return new ObjectResult(example);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>returns list of available operators</remarks>
        /// <param name="path"></param>
        /// <param name="alertId"></param>
        /// <response code="200">Available operators</response>
        [HttpGet]
        [Route("/SmartBear-CC/Julia_09032021/1.0.0/policies/conditions/suggestion/operators")]
        [ValidateModelState]
        [SwaggerOperation("GetOperatorsForPath")]
        [SwaggerResponse(statusCode: 200, type: typeof(List<FilterSegment>), description: "Available operators")]
        public virtual IActionResult GetOperatorsForPath([FromQuery][Required()]string path, [FromQuery][Required()]string alertId)
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(List<FilterSegment>));
            string exampleJson = null;
            exampleJson = "[ {\n  \"id\" : \"id\",\n  \"value\" : \"value\"\n}, {\n  \"id\" : \"id\",\n  \"value\" : \"value\"\n} ]";
            
                        var example = exampleJson != null
                        ? JsonConvert.DeserializeObject<List<FilterSegment>>(exampleJson)
                        : default(List<FilterSegment>);            //TODO: Change the data returned
            return new ObjectResult(example);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <remarks>returns list of available values</remarks>
        /// <param name="path"></param>
        /// <param name="_operator"></param>
        /// <param name="alertId"></param>
        /// <response code="200">Available values</response>
        [HttpGet]
        [Route("/SmartBear-CC/Julia_09032021/1.0.0/policies/conditions /suggestion/values")]
        [ValidateModelState]
        [SwaggerOperation("GetValuesForPathAndOperator")]
        [SwaggerResponse(statusCode: 200, type: typeof(List<FilterSegment>), description: "Available values")]
        public virtual IActionResult GetValuesForPathAndOperator([FromQuery][Required()]string path, [FromQuery][Required()]string _operator, [FromQuery][Required()]string alertId)
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(List<FilterSegment>));
            string exampleJson = null;
            exampleJson = "[ {\n  \"id\" : \"id\",\n  \"value\" : \"value\"\n}, {\n  \"id\" : \"id\",\n  \"value\" : \"value\"\n} ]";
            
                        var example = exampleJson != null
                        ? JsonConvert.DeserializeObject<List<FilterSegment>>(exampleJson)
                        : default(List<FilterSegment>);            //TODO: Change the data returned
            return new ObjectResult(example);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="alertId"></param>
        /// <param name="teamId"></param>
        /// <response code="200">List of rules associated with the policy</response>
        [HttpGet]
        [Route("/SmartBear-CC/Julia_09032021/1.0.0/policies/{id}/rule_config")]
        [ValidateModelState]
        [SwaggerOperation("PoliciesIdRuleConfigGet")]
        [SwaggerResponse(statusCode: 200, type: typeof(RuleConfig), description: "List of rules associated with the policy")]
        public virtual IActionResult PoliciesIdRuleConfigGet([FromRoute][Required][RegularExpression("/^[a-z0-9.-]*$/")]string id, [FromQuery]string alertId, [FromQuery]Guid? teamId)
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(RuleConfig));
            string exampleJson = null;
            exampleJson = "{\n  \"rules\" : [ {\n    \"riskRank\" : \"critical\",\n    \"name\" : \"s3 buckets with websites are expected to be public\",\n    \"matched\" : false,\n    \"id\" : \"id\",\n    \"conditions\" : [ {\n      \"path\" : {\n        \"id\" : \"region\",\n        \"value\" : \"$.region\"\n      },\n      \"observedValue\" : \"us-west-1\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"value\" : \"us-east\",\n      \"operator\" : \"startsWith\"\n    }, {\n      \"path\" : {\n        \"id\" : \"region\",\n        \"value\" : \"$.region\"\n      },\n      \"observedValue\" : \"us-west-1\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"value\" : \"us-east\",\n      \"operator\" : \"startsWith\"\n    } ],\n    \"operator\" : \"and\"\n  }, {\n    \"riskRank\" : \"critical\",\n    \"name\" : \"s3 buckets with websites are expected to be public\",\n    \"matched\" : false,\n    \"id\" : \"id\",\n    \"conditions\" : [ {\n      \"path\" : {\n        \"id\" : \"region\",\n        \"value\" : \"$.region\"\n      },\n      \"observedValue\" : \"us-west-1\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"value\" : \"us-east\",\n      \"operator\" : \"startsWith\"\n    }, {\n      \"path\" : {\n        \"id\" : \"region\",\n        \"value\" : \"$.region\"\n      },\n      \"observedValue\" : \"us-west-1\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"value\" : \"us-east\",\n      \"operator\" : \"startsWith\"\n    } ],\n    \"operator\" : \"and\"\n  } ]\n}";
            
                        var example = exampleJson != null
                        ? JsonConvert.DeserializeObject<RuleConfig>(exampleJson)
                        : default(RuleConfig);            //TODO: Change the data returned
            return new ObjectResult(example);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="body"></param>
        /// <response code="200">List of normalized policies matching the criteria</response>
        [HttpPost]
        [Route("/SmartBear-CC/Julia_09032021/1.0.0/policies/search")]
        [ValidateModelState]
        [SwaggerOperation("SearchPolicy")]
        [SwaggerResponse(statusCode: 200, type: typeof(List<DassanaPolicy>), description: "List of normalized policies matching the criteria")]
        public virtual IActionResult SearchPolicy([FromBody]Body body)
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(List<DassanaPolicy>));
            string exampleJson = null;
            exampleJson = "[ {\n  \"csp\" : {\n    \"name\" : \"AWS\",\n    \"id\" : \"aws\"\n  },\n  \"subCategory\" : {\n    \"name\" : \"Firewall\",\n    \"id\" : \"firewall\"\n  },\n  \"service\" : {\n    \"name\" : \"S3\",\n    \"id\" : \"s3\"\n  },\n  \"defaultRiskRank\" : \"critical\",\n  \"id\" : \"security-group-allows-ssh-connections-from-internet\",\n  \"category\" : {\n    \"name\" : \"Network\",\n    \"id\" : \"network\"\n  },\n  \"vendors\" : [ {\n    \"imageUrl\" : \"https://images.dassana.cloud/static/security-hub.png\",\n    \"name\" : \"Security Hub\",\n    \"id\" : \"aws-security-hub\"\n  }, {\n    \"imageUrl\" : \"https://images.dassana.cloud/static/security-hub.png\",\n    \"name\" : \"Security Hub\",\n    \"id\" : \"aws-security-hub\"\n  } ],\n  \"alertDetails\" : { },\n  \"resourceType\" : {\n    \"name\" : \"S3 Bucket\",\n    \"id\" : \"Bucket\"\n  }\n}, {\n  \"csp\" : {\n    \"name\" : \"AWS\",\n    \"id\" : \"aws\"\n  },\n  \"subCategory\" : {\n    \"name\" : \"Firewall\",\n    \"id\" : \"firewall\"\n  },\n  \"service\" : {\n    \"name\" : \"S3\",\n    \"id\" : \"s3\"\n  },\n  \"defaultRiskRank\" : \"critical\",\n  \"id\" : \"security-group-allows-ssh-connections-from-internet\",\n  \"category\" : {\n    \"name\" : \"Network\",\n    \"id\" : \"network\"\n  },\n  \"vendors\" : [ {\n    \"imageUrl\" : \"https://images.dassana.cloud/static/security-hub.png\",\n    \"name\" : \"Security Hub\",\n    \"id\" : \"aws-security-hub\"\n  }, {\n    \"imageUrl\" : \"https://images.dassana.cloud/static/security-hub.png\",\n    \"name\" : \"Security Hub\",\n    \"id\" : \"aws-security-hub\"\n  } ],\n  \"alertDetails\" : { },\n  \"resourceType\" : {\n    \"name\" : \"S3 Bucket\",\n    \"id\" : \"Bucket\"\n  }\n} ]";
            
                        var example = exampleJson != null
                        ? JsonConvert.DeserializeObject<List<DassanaPolicy>>(exampleJson)
                        : default(List<DassanaPolicy>);            //TODO: Change the data returned
            return new ObjectResult(example);
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="alertId"></param>
        /// <param name="teamId"></param>
        /// <param name="id"></param>
        /// <param name="body"></param>
        /// <param name="test"></param>
        /// <response code="200">200 response is generated if the test parameter was set to false</response>
        /// <response code="202">202 response is generated if the test parameter was set to true. Note that the server will be not persist the changes in this case</response>
        [HttpPost]
        [Route("/SmartBear-CC/Julia_09032021/1.0.0/policies/{id}/rule_config")]
        [ValidateModelState]
        [SwaggerOperation("UpdatePolicyConfig")]
        [SwaggerResponse(statusCode: 200, type: typeof(RuleConfig), description: "200 response is generated if the test parameter was set to false")]
        [SwaggerResponse(statusCode: 202, type: typeof(RuleConfig), description: "202 response is generated if the test parameter was set to true. Note that the server will be not persist the changes in this case")]
        public virtual IActionResult UpdatePolicyConfig([FromQuery][Required()]string alertId, [FromQuery][Required()]Guid? teamId, [FromRoute][Required][RegularExpression("/^[a-z0-9.-]*$/")]string id, [FromBody]RuleConfig body, [FromQuery]bool? test)
        { 
            //TODO: Uncomment the next line to return response 200 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(200, default(RuleConfig));

            //TODO: Uncomment the next line to return response 202 or use other options such as return this.NotFound(), return this.BadRequest(..), ...
            // return StatusCode(202, default(RuleConfig));
            string exampleJson = null;
            exampleJson = "{\n  \"rules\" : [ {\n    \"riskRank\" : \"critical\",\n    \"name\" : \"s3 buckets with websites are expected to be public\",\n    \"matched\" : false,\n    \"id\" : \"id\",\n    \"conditions\" : [ {\n      \"path\" : {\n        \"id\" : \"region\",\n        \"value\" : \"$.region\"\n      },\n      \"observedValue\" : \"us-west-1\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"value\" : \"us-east\",\n      \"operator\" : \"startsWith\"\n    }, {\n      \"path\" : {\n        \"id\" : \"region\",\n        \"value\" : \"$.region\"\n      },\n      \"observedValue\" : \"us-west-1\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"value\" : \"us-east\",\n      \"operator\" : \"startsWith\"\n    } ],\n    \"operator\" : \"and\"\n  }, {\n    \"riskRank\" : \"critical\",\n    \"name\" : \"s3 buckets with websites are expected to be public\",\n    \"matched\" : false,\n    \"id\" : \"id\",\n    \"conditions\" : [ {\n      \"path\" : {\n        \"id\" : \"region\",\n        \"value\" : \"$.region\"\n      },\n      \"observedValue\" : \"us-west-1\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"value\" : \"us-east\",\n      \"operator\" : \"startsWith\"\n    }, {\n      \"path\" : {\n        \"id\" : \"region\",\n        \"value\" : \"$.region\"\n      },\n      \"observedValue\" : \"us-west-1\",\n      \"id\" : \"046b6c7f-0b8a-43b9-b35d-6489e6daee91\",\n      \"value\" : \"us-east\",\n      \"operator\" : \"startsWith\"\n    } ],\n    \"operator\" : \"and\"\n  } ]\n}";
            
                        var example = exampleJson != null
                        ? JsonConvert.DeserializeObject<RuleConfig>(exampleJson)
                        : default(RuleConfig);            //TODO: Change the data returned
            return new ObjectResult(example);
        }
    }
}
