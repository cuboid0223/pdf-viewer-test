"use client";

import {
  Viewer,
  SpecialZoomLevel,
  ProgressBar,
  RenderPageProps,
  ScrollMode,
  DocumentLoadEvent,
  PageChangeEvent,
  ZoomEvent,
  LocalizationMap,
} from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { bookmarkPlugin } from "@react-pdf-viewer/bookmark";
import { scrollModePlugin } from "@react-pdf-viewer/scroll-mode";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// Import styles
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { useEffect } from "react";
import { usePdfContext } from "@/app/context/PdfContext";
import zh_TW from "@react-pdf-viewer/locales/lib/zh_TW.json";

function Reader() {
  const bookmarkPluginInstance = bookmarkPlugin();
  const scrollModePluginInstance = scrollModePlugin();

  const { fileInfo, setFileInfo } = usePdfContext();

  const renderPage = (props: RenderPageProps) => {
    // console.log(props.width);
    return (
      <>
        {props.canvasLayer.children}
        <div
          style={
            {
              // userSelect: "none"
            }
          }
        >
          {props.textLayer.children}
        </div>
        {props.annotationLayer.children}
      </>
    );
  };

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    toolbarPlugin: {
      fullScreenPlugin: {
        onEnterFullScreen: (zoom) => {
          zoom(SpecialZoomLevel.PageFit);
          defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
            ScrollMode.Wrapped
          );
        },
        onExitFullScreen: (zoom) => {
          zoom(SpecialZoomLevel.PageWidth);
          defaultLayoutPluginInstance.toolbarPluginInstance.scrollModePluginInstance.switchScrollMode(
            ScrollMode.Vertical
          );
        },
      },
    },
  });

  const handleDocumentLoad = (e: DocumentLoadEvent) => {
    // console.log(`Number of pages: ${e.doc.numPages}`);
    // console.log(`file name: ${e.file.name}`);
    if (e !== undefined) {
      setFileInfo({ ...fileInfo!, n_page: e.doc.numPages });
    }
  };

  const handlePageChange = (e: PageChangeEvent) => {
    console.log("換頁了");
    console.log(`現在在第${e.currentPage}頁`);
    setFileInfo({ ...fileInfo!, currentPage: e.currentPage });
  };

  const handleZoom = (e: ZoomEvent) => {
    console.log(`Zoom to ${e.scale}`);
  };

  useEffect(() => {}, []);

  return (
    <div>
      {fileInfo ? (
        <>
          <Viewer
            // the `fileUrl` option can be an `Uint8Array`.
            // fileUrl="./test_ch07.pdf"
            fileUrl={fileInfo.file}
            theme={{
              theme: "dark",
            }}
            defaultScale={SpecialZoomLevel.PageFit}
            // plugins={[
            //   bookmarkPluginInstance,
            //   scrollModePluginInstance,
            //   defaultLayoutPluginInstance,
            // ]}
            renderLoader={(percentages: number) => (
              <div style={{ width: "240px" }}>
                <ProgressBar progress={Math.round(percentages)} />
              </div>
            )}
            renderPage={renderPage}
            scrollMode={ScrollMode.Vertical}
            // scrollMode={ScrollMode.Horizontal}
            onDocumentLoad={handleDocumentLoad}
            onPageChange={handlePageChange}
            onZoom={handleZoom}
            localization={zh_TW as unknown as LocalizationMap}
          />
        </>
      ) : (
        <>
          {" "}
          <h1>no pdf</h1>
        </>
      )}

      {/* for test */}
      {/* <Viewer
        // the `fileUrl` option can be an `Uint8Array`.
        fileUrl="./test_ch07.pdf"
        // fileUrl={fileInfo.file}
        theme={{
          theme: "dark",
        }}
        defaultScale={SpecialZoomLevel.PageFit}
        // plugins={[
        //   bookmarkPluginInstance,
        //   scrollModePluginInstance,
        //   defaultLayoutPluginInstance,
        // ]}
        renderLoader={(percentages: number) => (
          <div style={{ width: "240px" }}>
            <ProgressBar progress={Math.round(percentages)} />
          </div>
        )}
        renderPage={renderPage}
        scrollMode={ScrollMode.Vertical}
        // scrollMode={ScrollMode.Horizontal}
        onDocumentLoad={handleDocumentLoad}
        onPageChange={handlePageChange}
        onZoom={handleZoom}
        localization={zh_TW as unknown as LocalizationMap}
      /> */}
    </div>
  );
}

export default Reader;
