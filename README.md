Background
In this challenge, you'll be working on preparing data received from a front-end application for database insertion. The data comes in a complex structure with various fields, including nested objects, and not all of these are suitable for direct database storage. Your task is to sanitize and transform this data according to the database's expected schema while also ensuring certain additional keys are retained as specified.

Challenge Description
You are provided with three inputs:

frontEndData: An object representing the data received from the front-end. This object contains various fields, some of which include nested objects and others that are irrelevant to the database schema.

flattenedDbColumns: An object that represents the schema of the database columns. This schema is the "target structure" for the data you need to insert into the database, showcasing how the sanitized data should be structured.

keysToKeep: An array of strings representing the keys that need to be retained in the frontEndData during the sanitization process, regardless of whether they fit directly into the database schema.

Requirements
Sanitize and Transform frontEndData: Iterate over frontEndData to produce a new object that aligns with the structure and fields specified in flattenedDbColumns. You must also ensure that any keys listed in keysToKeep that are not already included in flattenedDbColumns are preserved in the final output.

Flatten Nested Structures: Extract fields from nested objects within frontEndData, ensuring they are included at the top level of the final output object if they match keys in flattenedDbColumns or are specified in keysToKeep.

Preserve Essential Front-End Data: For keys specified in keysToKeep but not present in flattenedDbColumns, include these in the sanitized object without transformation.

Remove Irrelevant Data: Exclude any fields from frontEndData that are neither specified in flattenedDbColumns nor listed in keysToKeep.

Implementation
Write a JavaScript function that accepts frontEndData, flattenedDbColumns, and keysToKeep as inputs and returns a new object that is both sanitized for database entry and retains necessary front-end specific data.

The function should dynamically adapt to changes in the input structure, database schema (flattenedDbColumns), and keysToKeep, ensuring versatility and reusability.

Consider employing recursion for nested structures and carefully handling the merging of nested fields into the top level of your output object, respecting the guidelines provided by flattenedDbColumns and keysToKeep.

Example
Given the provided frontEndData, flattenedDbColumns, and keysToKeep, your function should return a sanitized version of frontEndData that is structured according to flattenedDbColumns but also includes any additional keys specified in keysToKeep that are not already part of the flattened database columns.

This challenge will test your abilities in object manipulation, data transformation, and dynamic programming in JavaScript, providing a practical scenario that mimics real-world data preparation tasks for database operations.


const frontEndData = {
  "name": "masinp pkk",
  "name_unique": "main_supplier",
  "description": "shampoo for hair wash",
  "unknownData":"manche",
  "noexitsting":"databurst",
  "supplier_address":
  {
    "create": {
      "address_type": "billing",
      "address": { "test": "test" },
      "partner_id": "c57fd6cf-e194-4666-9679-c96a71a118e8"
    }
  },

  "partner_id": "c57fd6cf-e194-4666-9679-c96a71a118e8"
}
const flattenedDbColumns = {
  name: 'masinp pkk',
  name_unique: 'main_supplier',
  description: 'shampoo for hair wash',
  partner_id: 'c57fd6cf-e194-4666-9679-c96a71a118e8',
  address_type: 'billing',
  address: { test: 'test' }
}


const keysToKeep = ['create', 'createMany', 'data', 'supplier', 'supplier_address']

outPut = {
    "name": "masinp pkk",
    "name_unique": "main_supplier",
    "description": "shampoo for hair wash",
    "supplier_address": {
        "create": {
            "address_type": "billing",
            "address": {
                "test": "test"
            },
            "partner_id": "c57fd6cf-e194-4666-9679-c96a71a118e8"
        }
    },
    "partner_id": "c57fd6cf-e194-4666-9679-c96a71a118e8"
}
