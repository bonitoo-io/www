module "bonitoo-s3-static-website" {
  source                       = "git::https://github.com/cn-terraform/terraform-aws-s3-static-website.git?ref=1.0.8"
  website_domain_name          = "bonitoo.io"
  name_prefix                  = "www-bonitoo"
  create_route53_hosted_zone   = false
  route53_hosted_zone_id       = "Z06295033EKCDP397AJYI"
  website_cors_allowed_methods = ["GET"]
  providers = {
    aws.main         = aws.main
    aws.acm_provider = aws.acm_provider
  }
  create_acm_certificate = true
  website_server_side_encryption_configuration = {
    rule = {
      apply_server_side_encryption_by_default = {
        sse_algorithm = "AES256"
      }
    }
  }

  log_bucket_force_destroy     = true
  website_bucket_force_destroy = true
}

data "aws_caller_identity" "current" {}
locals {
  account_id = data.aws_caller_identity.current.account_id
}

output "account_id" {
  value = local.account_id
}
