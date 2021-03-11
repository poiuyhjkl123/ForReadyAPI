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
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using Newtonsoft.Json;

namespace IO.Swagger.Models
{ 
    /// <summary>
    /// 
    /// </summary>
    [DataContract]
    public partial class RuleConfig : IEquatable<RuleConfig>
    { 
        /// <summary>
        /// Gets or Sets Rules
        /// </summary>
        [DataMember(Name="rules")]
        public List<Rule> Rules { get; set; }

        /// <summary>
        /// Gets or Sets DefaultRiskRank
        /// </summary>
        [DataMember(Name="defaultRiskRank")]
        public RiskRank DefaultRiskRank { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class RuleConfig {\n");
            sb.Append("  Rules: ").Append(Rules).Append("\n");
            sb.Append("  DefaultRiskRank: ").Append(DefaultRiskRank).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="obj">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object obj)
        {
            if (ReferenceEquals(null, obj)) return false;
            if (ReferenceEquals(this, obj)) return true;
            return obj.GetType() == GetType() && Equals((RuleConfig)obj);
        }

        /// <summary>
        /// Returns true if RuleConfig instances are equal
        /// </summary>
        /// <param name="other">Instance of RuleConfig to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(RuleConfig other)
        {
            if (ReferenceEquals(null, other)) return false;
            if (ReferenceEquals(this, other)) return true;

            return 
                (
                    Rules == other.Rules ||
                    Rules != null &&
                    Rules.SequenceEqual(other.Rules)
                ) && 
                (
                    DefaultRiskRank == other.DefaultRiskRank ||
                    DefaultRiskRank != null &&
                    DefaultRiskRank.Equals(other.DefaultRiskRank)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                var hashCode = 41;
                // Suitable nullity checks etc, of course :)
                    if (Rules != null)
                    hashCode = hashCode * 59 + Rules.GetHashCode();
                    if (DefaultRiskRank != null)
                    hashCode = hashCode * 59 + DefaultRiskRank.GetHashCode();
                return hashCode;
            }
        }

        #region Operators
        #pragma warning disable 1591

        public static bool operator ==(RuleConfig left, RuleConfig right)
        {
            return Equals(left, right);
        }

        public static bool operator !=(RuleConfig left, RuleConfig right)
        {
            return !Equals(left, right);
        }

        #pragma warning restore 1591
        #endregion Operators
    }
}
