define([], function () {
    return {
      Tokens: {
        SelectTokenLabel: "Välj tecken...",
        Context: {
          ContextTokensGroupName: "Sammanhangstecken",
          SiteAbsoluteUrl: "Sidans fullständiga URL",
          SiteRelativeUrl: "Sidans server relativa URL",
          WebAbsoluteUrl: "Webbplatsens fullständiga URL",
          WebRelativeUrl: "Webbserverns relativa URL",
          WebTitle: "Titel",
          InputQueryText: "Infoga variabler"
        },
        Custom: {
          CustomTokensGroupName: "Anpassat värde",
          CustomValuePlaceholder: "Ange ett värde...",
          InvalidtokenFormatErrorMessage: "Vänligen ange ett teckenformat som använder sig av '{' och '}'. (t.ex: {Today})"
        },
        Date: {
          DateTokensGroupName: "Datum tecken",
          Today: "Idag",
          Yesterday: "Igår",
          Tomorrow: "Imorgon",
          OneWeekAgo: "En vecka sedan",
          OneMonthAgo: "En månad sedan",
          OneYearAgo: "Ett år sedan"
        },
        Page: {
          PageTokensGroupName: "Sidotecken",
          PageId: "Sidans ID",
          PageTitle: "Sidans titel",
          PageCustom: "Annan sidkolumn",
        },
        User: {
          UserTokensGroupName: "Anvädartecken",
          UserName: "Användarnamn",
          Me: "Jag",
          UserDepartment: "Användaravdelning",
          UserCustom: "Användaranpassad egenskap"
        }
      },
      General: {
        OnTextLabel: "På",
        OffTextLabel: "Av",
        StaticArrayFieldName: "Array som fält",
        About: "Om",
        Authors: "Författare",
        Version: "Version",
        InstanceId: "Webbdel-instans ID",
        Resources: {
          GroupName: "Resurser",
          Documentation: "Dokumentation",
          PleaseReferToDocumentationMessage: "Se den officiella dokumentationen."
        },
        Extensibility: {
          InvalidDataSourceInstance: "Den valda datakällan '{0}' kan inte implementera den abstrakta klassen 'BaseDataSource' korrekt. Vissa metoder saknas.",
          DataSourceDefinitionNotFound: "Den anpassade datakällan med nyckeln '{0}' hittades inte. Se till att lösningen är korrekt implementerad för appkatalogen och att manifest-ID:t är registrerat för denna webbdel.",
          LayoutDefinitionNotFound: "Den anpassade layouten med nyckeln '{0}' hittades inte. Se till att lösningen är korrekt implementerad för appkatalogen och att manifest-ID:t är registrerat för denna webbdel.",
          InvalidLayoutInstance: "Den valda layouten '{0}' implementerar inte abstraktklassen 'BaseLayout' korrekt. Vissa metoder saknas.",
          DefaultExtensibilityLibraryName: "Standardutbyggnadsbibliotek",
          InvalidProviderInstance: "Den valda förslagsleverantören '{0}' implementerar inte abstraktklassen 'BaseSuggestionProvider' korrekt. Vissa metoder saknas.",
          ProviderDefinitionNotFound: "Den anpassade förslagsleverantören med nyckeln '{0}' hittades inte. Se till att lösningen är korrekt implementerad för appkatalogen och att manifest-ID:t är registrerat för denna webbdel.",
        },
        DateFromLabel: "Från",
        DateTolabel: "Till",
        DatePickerStrings: {
          months: ['Januari', 'Februari', 'Mars', 'April', 'Maj', 'Juni', 'Juli', 'Augusti', 'September', 'Oktober', 'November', 'December'],
          shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'],
          days: ['Söndag', 'Måndag', 'Tisdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lördag'],
          shortDays: ['S', 'M', 'T', 'O', 'T', 'F', 'L'],
          goToToday: 'Gå till idag',
          prevMonthAriaLabel: 'Gå till föregående månad',
          nextMonthAriaLabel: 'Gå till nästa månad',
          prevYearAriaLabel: 'Gå till föregående år',
          nextYearAriaLabel: 'Gå till nästa år',
          closeButtonAriaLabel: 'Stäng datumväljaren',
          isRequiredErrorMessage: 'Startdatum krävs',
          invalidInputErrorMessage: 'Ogiltigt datumformat.'
        },
        DateIntervalStrings: {
          AnyTime: "När som helst",
          PastDay: "Senaste 24 timmarna",
          PastWeek: "Senaste veckan",
          PastMonth: "Senaste månaden",
          Past3Months: "Senaste 3 månaderna",
          PastYear: "Senaste året",
          Older: "Äldre än ett år"
        },
        SameTabOpenBehavior: "Använd den aktuella fliken",
        NewTabOpenBehavior: "Öppna i en ny flik",
        PageOpenBehaviorLabel: "Öppningsbeteende",
        EmptyFieldErrorMessage: "Det här fältet får inte vara tomt"
      },
      DataSources: {
        SharePointSearch: {
          SourceName: "SharePoint sök",
          SourceConfigurationGroupName: "Källkonfiguration",
          QueryTextFieldLabel: "Sökfrågetext",
          QueryTextFieldInfoMessage: "Använd konfigurationsfliken i webbdelen <strong>Tillgängliga anslutningar</strong> för att ange antingen ett statiskt värde eller ett värde från en dynamisk komponent på sidan, till exempel en sökruta.",
          QueryTemplateFieldLabel: "Sökfrågemall",
          QueryTemplatePlaceHolderText: "ex: Path:{Site}",
          QueryTemplateFieldDescription: "Sökfrågemallen. Du kan också använda {<tokens>} för att skapa en dynamisk fråga.",
          ResultSourceIdLabel: "ID för sökresultatet",
          ResultSourceIdDescription: "Använd ett standard SharePoint-ID i sökresultatet, eller skriv in ditt eget GUID-värde och tryck på 'Enter' för att spara.",
          InvalidResultSourceIdMessage: "Det angivna värdet är inte en giltigt GUID",
          EnableQueryRulesLabel: "Aktivera frågeregler",
          IncludeOneDriveResultsLabel: "Inkludera resultat från OneDrive för Företag",
          RefinementFilters: "Förfiningsfilter",
          RefinementFiltersDescription: "Inledande förfiningsfilter som kan användas i en fråga. Dessa vissas inte i de valda filtren. Om du vill infoga text använder du citattecken (\") istället för (').",
          EnableLocalizationLabel: "Aktivera lokalisering",
          EnableLocalizationOnLabel: "På",
          EnableLocalizationOffLabel: "Av",
          QueryCultureLabel: "Språk för sökbegäran",
          QueryCultureUseUiLanguageLabel: "Använd gränssnittsspråk",
          SelectedPropertiesFieldLabel: "Valda egenskaper",
          SelectedPropertiesFieldDescription: "Ange egenskaperna som ska hämtas från sökresultaten.",
          SelectedPropertiesPlaceholderLabel: "Välj egenskaper",
          TermNotFound: "(Term med ID '{0}' hittades inte)",
          ApplyQueryTemplateBtnText: "Tillämpa",
          EnableAudienceTargetingTglLabel: "Aktivera målgruppsanpassning"
        },
        MicrosoftSearch: {
          QueryTextFieldLabel: "Sökfrågetext",
          QueryTextFieldInfoMessage: "Använd konfigurationsfliken i webbdelen <strong>Tillgängliga anslutningar</strong> för att ange antingen ett statiskt värde eller ett värde från en dynamisk komponent på sidan, till exempel en sökruta.",
          SourceName: "Microsoft sök",
          SourceConfigurationGroupName: "Microsoft sök",
          EntityTypesField: "Sökbara enhetstyper",
          SelectedFieldsPropertiesFieldLabel: "Valda fält",
          SelectedFieldsPropertiesFieldDescription: "Anger fälten som ska hämtas från sökresultaten.",
          SelectedFieldsPlaceholderLabel: "Välj fält",
          EnableTopResultsLabel: "Aktivera toppresultat",
          ContentSourcesFieldLabel: "Innehållskällor",
          ContentSourcesFieldDescriptionLabel: "Visar ID för de anslutningar som definierats i administrationsportalen för Microsoft Search Connectors",
          ContentSourcesFieldPlaceholderLabel: "ex: 'MyCustomConnectorId'"
        },
        SearchCommon: {
          Sort: {
            SortPropertyPaneFieldLabel: "Sorteringsordning",
            SortListDescription: "Ange den första sorteringsordningen för sökresultaten. Du kan antingen välja ett fält i listrutan (endast om datakällan redan har hämtats) eller skriv ditt eget anpassade värde (tryck på 'Enter' för att spara)",
            SortDirectionAscendingLabel: "Stigande",
            SortDirectionDescendingLabel: "Fallande",
            SortErrorMessage: "Ogiltig sökegenskap (Kontrollera om den hanterade egenskapen är sorterbar).",
            SortPanelSortFieldLabel: "Sortera efter fält",
            SortPanelSortFieldAria: "Sortera efter",
            SortPanelSortFieldPlaceHolder: "Sortera efter",
            SortPanelSortDirectionLabel: "Sortering riktning",
            SortDirectionColumnLabel: "Riktning",
            SortFieldColumnLabel: "Fält namn",
            EditSortLabel: "Redigera sorteringsordning",
            SortInvalidSortableFieldMessage: "Den här egenskapen kan inte sorteras",
            SortFieldColumnPlaceholder: "Välj fält..."
          }
        }
      },
      Controls: {
        TextDialogButtonText: "Lägg till Handlebars-uttryck",
        TextDialogTitle: "Redigera Handlebars-uttryck",
        TextDialogCancelButtonText: "Avbryt",
        TextDialogSaveButtonText: "Spara",
        SelectItemComboPlaceHolder: "Välj egenskap",
        AddStaticDataLabel: "Lägg till statisk data",
        TextFieldApplyButtonText: "Tillämpa"
      },
      Layouts: {
        Debug: {
          Name: "Debug"
        },
        Custom: {
          Name: "Anpassad"
        },
        SimpleList: {
          Name: "Lista",
          ShowFileIconLabel: "Visa filikon",
          ShowItemThumbnailLabel: "Visa miniatyrbild"
        },
        DetailsList: {
          Name: "Detaljerad lista",
          UseHandlebarsExpressionLabel: "Använd Handlebars-uttryck",
          MinimumWidthColumnLabel: "Minimum bredd (px)",
          MaximumWidthColumnLabel: "Maximum bredd (px)",
          SortableColumnLabel: "Sorterbar",
          ResizableColumnLabel: "Storleken kan redigeras",
          MultilineColumnLabel: "Flera linjer",
          LinkToItemColumnLabel: "Länk till artikel",
          CompactModeLabel: "Kompakt läge",
          ShowFileIcon: "Visa filikon",
          ManageDetailsListColumnDescription: "Lägg till, uppdatera eller ta bort kolumner från layouten i detaljlistan. Du kan antingen använda egenskapsvärden i listan direkt utan någon transformation, eller så kan du använda ett styruttryck som fältets värde. HTML stöds för användning i alla fält.",
          ManageDetailsListColumnLabel: "Hantera kolumner",
          ValueColumnLabel: "Kolumnvärde",
          DisplayNameColumnLabel: "Kolumnens visningsnamn",
          FileExtensionFieldLabel: "Fält för användning av filtillägg",
          GroupByFieldLabel: "Gruppera efter fält",
          EnableGrouping: "Aktivera gruppering",
          CollapsedGroupsByDefault: "Visa kollapsade",
          ResetFieldsBtnLabel: "Återställ fält till standardvärden"
        },
        Cards: {
          Name: "Kort",
          ManageTilesFieldsLabel: "Hantera kortfält",
          ManageTilesFieldsPanelDescriptionLabel: "Här kan du mappa varje fältvärde med motsvarande kortplatshållare. Du kan antingen använda en resultategenskap direkt utan någon transformation, eller så kan du använda ett Handlebars-uttryck som fältets värde. När du har angett kan du klistra in din egen HTML-kod i kommenterade fält.",
          PlaceholderNameFieldLabel: "Namn",
          SupportHTMLColumnLabel: "Tillåt HTML",
          PlaceholderValueFieldLabel: "Värde",
          UseHandlebarsExpressionLabel: "Använd Handlebars-uttryck",
          EnableItemPreview: "Tillåt förhandsgranskning av resultatet",
          EnableItemPreviewHoverMessage: "Att aktivera den här funktionen kan påverka prestandan om för många objekt visas samtidigt och du använder fältet 'AutoPreviewUrl'. Vi rekommenderar att du använder det här alternativet med få objekt, eller genom att använda fördefinierade förhandsgranskningar av URL:er från datakällas fält i platser.",
          ShowFileIcon: "Visa filikon",
          CompactModeLabel: "Kompakt läge",
          PreferedCardNumberPerRow: "Önskat antal kort per rad",
          Fields: {
            Title: "Titel",
            Location: "Plats",
            Tags: "Taggar",
            PreviewImage: "Förhandsgranskning av bild",
            PreviewUrl: "Förhandsgranskning av Url",
            Url: "Url",
            Date: "Datum",
            Author: "Författare",
            ProfileImage: "Url för profilbild",
            FileExtension: "Filändelsen",
            IsContainer: "Är mapp"
          },
          ResetFieldsBtnLabel: "Återställ fält till standardvärden"
        },
        Slider: {
          Name: "Slider",
          SliderAutoPlay: "Automatisk uppspelning",
          SliderAutoPlayDuration: "Varaktighet för automatisk uppspelning (i sekunder)",
          SliderPauseAutoPlayOnHover: "Pausa genom att föra musen över",
          SliderGroupCells: "Antalet element som ska grupperas i slides",
          SliderShowPageDots: "Visa sidpunkter",
          SliderWrapAround: "Oändlig scroll",
          SlideHeight: "Slide höjd (i px)",
          SlideWidth: "Slide bredd (i px)"
        },
        People: {
          Name: "Person",
          ManagePeopleFieldsLabel: "Hantera fält för personer",
          ManagePeopleFieldsPanelDescriptionLabel: "Här kan du mappa varje fältvärde med motsvarande person-placeholder. Du kan antingen använda datakällans fältvärde direkt utan någon omvandling, eller så kan du använda ett styruttryck i värdefältet.",
          PlaceholderNameFieldLabel: "Namn",
          PlaceholderValueFieldLabel: "Värde",
          UseHandlebarsExpressionLabel: "Använd Handlebars-uttryck",
          PersonaSizeOptionsLabel: "Komponentstorlek",
          PersonaSizeExtraSmall: "Extra liten",
          PersonaSizeSmall: "Liten",
          PersonaSizeRegular: "Vanlig",
          PersonaSizeLarge: "Stor",
          PersonaSizeExtraLarge: "Extra stor",
          ShowInitialsToggleLabel: "Visa initialer om ingen bild är tillgänglig",
          SupportHTMLColumnLabel: "Tillåt HTML",
          ResetFieldsBtnLabel: "Återställ fält till standardvärden",
          ShowPersonaCardOnHover: "Visa personakort genom att föra musen över",
          ShowPersonaCardOnHoverCalloutMsg: "Denna funktion använder Microsoft Graph för att visa information om användaren och måste använda följande API-behörigheter i din klient för att den ska fungera: ['User.Read','People.Read','Contacts.Read','User.Read.All'].",
          Fields: {
            ImageUrl: "Bild URL",
            PrimaryText: "Primärtext",
            SecondaryText: "Sekundär text",
            TertiaryText: "Tertiär text",
            OptionalText: "Valfri text"
          }
        },
        Vertical: {
          Name: "Vertikal"
        },
        Horizontal: {
          Name: "Horisontell",
          PreferedFilterNumberPerRow: "Önskat antal filter per rad",
        },
        Panel: {
          Name: "Panel",
          IsModal: "Modal",
          IsLightDismiss: "Lätt avfärdad",
          Size: "Panelstorlek",
          ButtonLabel: "Visa filter",
          ButtonLabelFieldName: "Visa knappetikett",
          HeaderText: "Filter",
          HeaderTextFieldName: "Rubrik på panelen",
          SizeOptions: {
            SmallFixedFar: 'Liten (standard)',
            SmallFixedNear: 'Liten, nära sidan',
            Medium: 'Medium',
            Large: 'Stor',
            LargeFixed: 'Stor, fast bredd',
            ExtraLarge: 'Extra stor',
            SmallFluid: 'Fullbredd (flytande)'
          }
        }
      },
      HandlebarsHelpers: {
        CountMessageLong: "<b>{0}</b> resultat för '<em>{1}</em>'",
        CountMessageShort: "<b>{0}</b> resultat",
      },
      PropertyPane: {
        ConnectionsPage: {
          DataConnectionsGroupName: "Tillgängliga anslutningar"
        },
        InformationPage: {
          Extensibility: {
            GroupName: "Utbyggnadskonfiguration",
            FieldLabel: "Utbyggnadsbibliotek att ladda",
            ManageBtnLabel: "Konfigurera",
            Columns: {
              Name: "Namn/Syfte",
              Id: "Manifest GUID",
              Enabled: "Aktiverad/Inaktiverad"
            }
          }
        }
      },
      Filters: {
        ApplyAllFiltersButtonLabel: "Tillämpa",
        ClearAllFiltersButtonLabel: "Rensa",
        FilterNoValuesMessage: "Inga värden för detta filter",
        OrOperator: "ELLER",
        AndOperator: "OCH",
        ComboBoxPlaceHolder: "Välj värde"
      },
      SuggestionProviders: {
        SharePointStatic: {
          ProviderName: "SharePoint statiska sökförslag",
          ProviderDescription: "Hämta SharePoint statiska användadefinierade sökförslag"
        }
      }
    }
  })
