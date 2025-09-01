terraform {
  required_version = ">= 0.13"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    bucket               = "tf-bonitoo-website"
    workspace_key_prefix = "workspaces"
    key                  = "terraform.tfstate"
    region               = "eu-central-1"
    encrypt              = true
  }
}

provider "aws" {
  alias                   = "main"
  region                  = "eu-central-1"
  skip_metadata_api_check = true
  s3_use_path_style       = true
}

provider "aws" {
  alias                   = "acm_provider"
  region                  = "us-east-1"
  skip_metadata_api_check = true
  s3_use_path_style       = true
}
