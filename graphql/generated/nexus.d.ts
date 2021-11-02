/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../context"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    DateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    DateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
}

export interface NexusGenEnums {
  SortOrder: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Item: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    description?: string | null; // String
    id: string; // ID!
    imageUrl?: string | null; // String
    title: string; // String!
    updatedAt?: NexusGenScalars['DateTime'] | null; // DateTime
    url?: string | null; // String
  }
  Mutation: {};
  Query: {};
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Item: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    description: string | null; // String
    id: string; // ID!
    imageUrl: string | null; // String
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
    url: string | null; // String
  }
  Mutation: { // field return type
    createItem: NexusGenRootTypes['Item'] | null; // Item
    deleteItem: NexusGenRootTypes['Item'] | null; // Item
    updateItem: NexusGenRootTypes['Item'] | null; // Item
  }
  Query: { // field return type
    getItems: Array<NexusGenRootTypes['Item'] | null> | null; // [Item]
    getOneItem: NexusGenRootTypes['Item'] | null; // Item
  }
}

export interface NexusGenFieldTypeNames {
  Item: { // field return type name
    createdAt: 'DateTime'
    description: 'String'
    id: 'ID'
    imageUrl: 'String'
    title: 'String'
    updatedAt: 'DateTime'
    url: 'String'
  }
  Mutation: { // field return type name
    createItem: 'Item'
    deleteItem: 'Item'
    updateItem: 'Item'
  }
  Query: { // field return type name
    getItems: 'Item'
    getOneItem: 'Item'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createItem: { // args
      description?: string | null; // String
      imageUrl?: string | null; // String
      title: string; // String!
      url?: string | null; // String
    }
    deleteItem: { // args
      id: string; // ID!
    }
    updateItem: { // args
      description?: string | null; // String
      id: string; // ID!
      imageUrl?: string | null; // String
      title?: string | null; // String
      url?: string | null; // String
    }
  }
  Query: {
    getItems: { // args
      sortBy?: NexusGenEnums['SortOrder'] | null; // SortOrder
    }
    getOneItem: { // args
      id: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = never;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}