root = this
log = root.log
define = root.define

define [
	'jquery'
], ($) ->
	class CorpEdu
		@onCameraSessionLineItems: (rates) ->
			category = parseInt $('input:radio[name=category]:checked').val(), 10 # Should be 0, or 1.
			categoryLabel = if (category == 0) then 'Category I' else 'Category II'
			categoryPrefix = if (category == 0) then 'cat_1_' else 'cat_2_'
			
			numNarrators = parseInt $('#num-narrators').val(), 10
			numHalfPlayers = parseInt $('#num-half-players').val(), 10
			numPlayers = parseInt $('#num-players').val(), 10
			numExtras = parseInt $('#num-extras').val(), 10
			numDays = 0

			lineItems = []

			i = 0
			while i++ < numNarrators
				numDays = parseInt $("#narrator-#{i}-num-days").val(), 10

				lineItem = 
					label: "#{categoryLabel} Narrator #{i} - #{numDays} Days Total"
					first:
						label: "First Day"
						price: rates[categoryPrefix + 'session_narrator_day_1']
					items: []

				if numDays - 1
					lineItem.items.push
						count: numDays - 1
						label: "Add'l Days at $ #{rates[categoryPrefix + 'session_narrator_day_2'].toFixed(2)}"
						price: rates[categoryPrefix + 'session_narrator_day_2']

				lineItems.push lineItem

			i = 0
			while i++ < numHalfPlayers
				lineItem = 
					label: "#{categoryLabel} Half-day Player #{i}"
					first:
						label: "4-hour Session at $ #{rates[categoryPrefix + 'session_player_half_day'].toFixed(2)}"
						price: rates[categoryPrefix + 'session_player_half_day']
					items: []

				lineItems.push lineItem

			i = 0
			while i++ < numPlayers
				numDays = parseFloat $("#player-#{i}-num-days").val(), 10

				numFullDays = Math.floor(numDays)
				numHalfDays = Math.ceil(numDays - numFullDays)
				numFiveDays = Math.floor(numFullDays / 5)
				numThreeDays = Math.floor((numFullDays - (numFiveDays * 5)) / 3)
				numSingleDays = numFullDays - ((numFiveDays * 5) + (numThreeDays * 3))

				lineItem = 
					label: "#{categoryLabel} Day Player #{i} - #{numDays} Days Total"
					items: []

				if numFiveDays then lineItem.items.push
					count: numFiveDays
					label: "Week Session(s) at $ #{rates[categoryPrefix + 'session_player_week'].toFixed(2)}"
					price: rates[categoryPrefix + 'session_player_week']

				if numThreeDays then lineItem.items.push
					count: numThreeDays
					label: "3-Day Session(s) at $ #{rates[categoryPrefix + 'session_player_day_3'].toFixed(2)}"
					price: rates[categoryPrefix + 'session_player_day_3']

				if numSingleDays then lineItem.items.push
					count: numSingleDays
					label: "Single Day Session(s) at $ #{rates[categoryPrefix + 'session_player_day_1'].toFixed(2)}"
					price: rates[categoryPrefix + 'session_player_day_1']

				# if numHalfDays then lineItem.items.push
				# 	count: numHalfDays
				# 	label: "Half Day Session(s) at $ #{rates[categoryPrefix + 'session_player_half_day'].toFixed(2)}"
				# 	price: rates[categoryPrefix + 'session_player_half_day']

				lineItems.push lineItem

			i = 0
			while i++ < numExtras
				numDays = parseInt $("#extra-#{i}-num-days").val(), 10

				extraTypeIndex = parseInt($("#extra-#{i}-type").val(), 10) || 0
				
				extraLabel = [
					'General Extra'
					'Special Ability Extra'
					'Silent Bit Extra'
				][extraTypeIndex]

				extraSuffix = [
					'_general'
					'_special'
					'_silent'
				][extraTypeIndex]

				lineItem = 
					label: "#{categoryLabel} Extra #{i} - #{numDays} Days Total"
					first:
						label: "#{extraLabel} at $ #{rates[categoryPrefix + 'session_extra' + extraSuffix].toFixed(2)}"
						price: rates[categoryPrefix + 'session_extra' + extraSuffix] * numDays
					items: []

				# lineItem.items.push
				# 	count: numDays
				# 	label: "#{extraLabel} at #{rates[categoryPrefix + 'session_extra' + extraSuffix].toFixed(2)}"
				# 	price: rates[categoryPrefix + 'session_extra' + extraSuffix]

				lineItems.push lineItem
			
			lineItems

		@offCameraSessionLineItems: (rates) ->
			category = parseInt $('input:radio[name=category]:checked').val(), 10 # Should be 0, or 1.
			categoryLabel = if (category == 0) then 'Category I' else 'Category II'
			categoryPrefix = if (category == 0) then 'cat_1_' else 'cat_2_'

			numPrincipals = parseInt $('#num-principals').val(), 10

			lineItems = []

			i = 0
			while i++ < numPrincipals
				numHours = parseFloat $("#principal-#{i}-num-hours").val(), 10
			
				# lineItem = 
				# 	label: "#{categoryLabel} Principal #{i} - #{numHours} Hours Total"
				# 	first:
				# 		label: "First Hour"
				# 		price: rates[categoryPrefix + 'session_actor_first_hour']
				# 	items: []

				# if numHours - 1
				# 	lineItem.items.push
				# 		count: (numHours - 1) * 2
				# 		label: "Add'l Half Hours at $ #{rates[categoryPrefix + 'session_actor_addl_half'].toFixed(2)}"
				# 		price: rates[categoryPrefix + 'session_actor_addl_half']

				lineItem = 
					label: "#{categoryLabel} Principal #{i}"
					first:
						label: "First Hour"
						price: rates[categoryPrefix + 'session_actor_first_hour']
					items: []

				if numHours - 1
					lineItem.items.push
						count: (numHours - 1) * 2
						label: "Add'l Half-hours at $ #{(rates[categoryPrefix + 'session_actor_addl_half']).toFixed(2)} ea."
						price: rates[categoryPrefix + 'session_actor_addl_half']

				lineItems.push lineItem
			
			lineItems

		@audioOnlySessionLineItems: (rates) ->
			category = parseInt $('input:radio[name=category]:checked').val(), 10 # Should be 0, 1, 2, or 3.
			storecastingUse = if category is 3 then parseInt $('#use-type-storecasting').val(), 10

			categoryLabel = switch category
				when 0 then 'Category I'
				when 1 then 'Category II'
				when 2 then 'Interactive Voice Recording (IVR), Phone Prompt System, or Phonecasting'
				when 3 then 'Storecasting'

			categoryPrefix = switch category
				when 0 then 'cat_1_'
				when 1 then 'cat_2_'
				when 2 then 'ivr_'
				when 3 then 'store_' + (unless storecastingUse then '3_month_' else '6_month_')

			# log categoryLabel, categoryPrefix
			numPrincipals = parseInt $('#num-principals').val(), 10

			lineItems = []

			i = 0
			while i++ < numPrincipals
				numHours = parseFloat $("#principal-#{i}-num-hours").val(), 10
			
				# lineItem = 
				# 	label: "#{categoryLabel} Principal #{i} - #{numHours} Hours Total"
				# 	first:
				# 		label: "First Hour"
				# 		price: rates[categoryPrefix + 'session_actor_first_hour']
				# 	items: []

				# if numHours - 1
				# 	lineItem.items.push
				# 		count: (numHours - 1) * 2
				# 		label: "Add'l Half Hours at $ #{rates[categoryPrefix + 'session_actor_addl_half'].toFixed(2)}"
				# 		price: rates[categoryPrefix + 'session_actor_addl_half']
			
				lineItem = 
					label: "#{categoryLabel} Principal #{i}"
					first:
						label: "First Hour" + (if category is 3 then (unless storecastingUse then ' (3 Month Use)' else ' (6 Month Use)') else '')
						price: rates[categoryPrefix + 'session_actor_first_hour']
					items: []

				if numHours - 1
					lineItem.items.push
						count: (numHours - 1) * 2
						label: "Add'l Half-hours at $ #{(rates[categoryPrefix + 'session_actor_addl_half']).toFixed(2)} ea."
						price: rates[categoryPrefix + 'session_actor_addl_half']

				lineItems.push lineItem
			
			lineItems

		# @audioOnlyUsageLineItems: (rates) ->
		# 	category = parseInt $('input:radio[name=category]:checked').val(), 10 # Should be 0, 1, 2, or 3.
		# 	if category isnt 3 then return []
		# 	categoryPrefix = 'store_' # This is only used for Storecasting.

		# 	use = parseInt $('#use-type-storecasting').val(), 10
		# 	useSuffix = if use is 0 then '_3_month' else '_6_month'
		# 	useLabel = if use is 0 then '3 Month Use' else '6 Month Use'

		# 	numPrincipals = parseInt $('#num-principals').val(), 10

		# 	lineItems = []
			
		# 	i = 0
		# 	while i++ < numPrincipals
		# 		lineItem = 
		# 			label: "Storecasting (#{useLabel})"
		# 			first:
		# 				label: "#{numPrincipals} Principal Actor(s)"
		# 				price: numPrincipals * rates[categoryPrefix + 'use' + useSuffix]
		# 			items: []

		# 		lineItems.push lineItem

		# 	lineItems

	CorpEdu