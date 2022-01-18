---
id: overwolf-games-events-hunt-showdown
title: Hunt Showdown Game Events
sidebar_label: Hunt Showdown
---

Please read the [overwolf.games.events](overwolf-games-events) documentation page to learn how to use Overwolf game events.

:::important Game ID
21328
:::

## Sample Apps
* [Football Manager 2022 game events sample app](https://github.com/overwolf/events-sample-apps)

## Available Features

* [gep_internal](#gep_internal)
* [match_info](#match_info)

## Game event status

It is highly recommended to communicate errors and warnings to app users. 

Check the current game event status [here](../status/all). Alternately, you can easily check that status from your app itself, [using our API](../topics/howto-check-events-status-from-app).

## `gep_internal`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
gep_internal | gep_internal| Local + Public version number|See [notes](#gep_internal-note)|   143.0       |

#### *gep_internal* note

Data Example:

```json
{"info":{"gep_internal":{"version_info":"{"local_version":"157.0.1","public_version":"157.0.1","is_updated":true}"}},"feature":"gep_internal"}
```

## `match_info`

### Info Updates

key          | Category    | Values                    | Notes                 | Since GEP Ver. |
------------ | ------------| ------------------------- | --------------------- | ------------- | 
score | match_info | Numeric value for team 1/2 game score. |See [notes](#score-note) |   188.0       |
notable | match_info | Any notable event (Yellow card / Red card / Goal) happening in-game, including player information & timestamp. |See [notes](#notable-note) |   188.0       |

#### *score* note

Data Example:

```json
{"info":{"match_info":{"score","value":"{"team1" : 1,"team2" : 3}"}},"feature":"match_info"}
```

#### *notable* note

Data Example:

```json
{"info":{"match_info":{"key":"notable","value":"{"player" : "D. Branković","action" : "YELLOW_CARD","time" : "17'"}"}},"feature":"match_info"}
{"info":{"match_info":{"key":"notable","value":"{"player" : "D. Branković","action" : "YELLOW_CARD","time" : "17'"},{"player" : "M. Jolović","action" : "YELLOW_CARD","time" : "29'"},{"player" : "N. Glišić","action" : "GOAL","time" : "47'"},{"player" : "N. Glišić","action" : "GOAL","time" : "58'"}},"feature":"match_info"}"}
{"info":{"match_info":{"key":"notable","value":"{"player" : "D. Branković","action" : "YELLOW_CARD","time" : "17'"},{"player" : "M. Jolović","action" : "YELLOW_CARD","time" : "29'"},{"player" : "N. Glišić","action" : "ASSIST","time" : "47'"},{"player" : "N. Glišić","action" : "ASSIST","time" : "58'"}},"feature":"match_info"}"}
```