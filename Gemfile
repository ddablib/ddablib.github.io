source 'https://rubygems.org'

gem "github-pages", "~> 228", group: :jekyll_plugins

group :jekyll_plugins do
  gem 'jekyll-optional-front-matter'
  gem "jekyll-redirect-from"
  gem "jekyll-titles-from-headings"
  gem "jemoji"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data
# gem and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 2.0.6"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

# Security updates
gem "commonmarker", ">= 0.23.10"
gem "nokogiri", "~> 1.18.8"
gem "rexml", "~> 3.3.9"
gem "activesupport", "~> 7.0.7.1"

# Fix for when using Ruby 3 - webrick no longer installed w/ Ruby 3
gem "webrick", "~> 1.8"
