# sv

DATA & I18N -> MJML -> HTML -> EML
Heidi / Iliad

ok


## caddy
```
files.aga-2024.com {
	root * /home/maxime/iliad

	tls redval@gmail.com

	@allowed {
		header_regexp Referer ^https?://(www\.)?aga-2024\.com(/.*)?$
	}

	handle @allowed {
		file_server
	}

	handle {
		respond "Forbidden" 403
	}

	encode gzip zstd

	header {
		X-Content-Type-Options nosniff
		X-XSS-Protection "1; mode=block"
		X-Frame-Options DENY
		Content-Security-Policy "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; font-src 'self'; object-src 'none'"
		Referrer-Policy "strict-origin-when-cross-origin"
	}

	log {
		output file /var/log/caddy/aga
		format console
		level ERROR
	}
}
```