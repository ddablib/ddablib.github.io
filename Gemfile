source 'https://rubygems.org'

gem "github-pages", "~> 227", group: :jekyll_plugins

group :jekyll_plugins do
  gem 'jekyll-optional-front-matter'
  gem "jekyll-redirect-from"
  gem "jekyll-titles-from-headings"
  gem "jemoji"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data
# gem and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2.10"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

# Security updates
gem "commonmarker", ">= 0.23.6"    # Dependabot alert #1
gem "nokogiri", "~> 1.13.10"       # Dependabot alert PR#44
